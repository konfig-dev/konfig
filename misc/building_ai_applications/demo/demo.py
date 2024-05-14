import json, re, yaml
import os
from typing import TypedDict
import prompts
from operator import itemgetter
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI
from langchain.cache import SQLiteCache
from langchain.globals import set_llm_cache
import phoenix as px

# Only launch phoenix if Django if env variable PHOENIX is true
if os.environ.get("PHOENIX", "false") == "true":
    session = px.launch_app()

    # Once you have started a Phoenix server, you can start your LangChain application with the OpenInferenceTracer as a callback. To do this, you will have to instrument your LangChain application with the tracer:

    from phoenix.trace.langchain import LangChainInstrumentor

    # By default, the traces will be exported to the locally running Phoenix server.
    LangChainInstrumentor().instrument()


class Plan(TypedDict):
    query: str
    spec_parts: list
    docs_summary: str
    config_summary: str
    plan: str
    plan_stream: any


config_description = (
    "This json is the return value of the `Get Journey Parameters` endpoint."
)


def generate_plan(query, language, config, customer_name: str):
    import os

    spec_path = os.path.join(os.path.dirname(__file__), "documents", "spec.yaml")
    docs_path = os.path.join(
        os.path.dirname(__file__), "documents", "creating-a-journey.md"
    )
    return generate_plan_helper(
        f"In {language}, " + query,
        spec_path,
        [docs_path],
        config,
        config_description,
        customer_name,
    )


def generate_guide(plan):
    model = ChatOpenAI(model="gpt-4-turbo", temperature=0, model_kwargs={"seed": 0})
    chain = (
        {
            "spec_parts": itemgetter("spec_parts"),
            "query": itemgetter("query"),
            "docs_summary": itemgetter("docs_summary"),
            "config_summary": itemgetter("config_summary"),
            "plan": itemgetter("plan"),
        }
        | prompts.writer_prompt
        | model
        | StrOutputParser()
    )
    params = {
        "spec_parts": format_spec_parts(plan["spec_parts"]),
        "query": plan["query"],
        "docs_summary": plan["docs_summary"],
        "config_summary": plan["config_summary"],
        "plan": plan["plan"],
    }
    return chain.stream(params)


def generate_plan_helper(
    query, spec_path, docs_paths, config, config_description, customer_name
):
    spec = read_spec(spec_path)
    docs = read_docs(docs_paths)
    model = ChatOpenAI(model="gpt-4-turbo", temperature=0, model_kwargs={"seed": 0})
    # enable caching for pre-processing agents
    set_llm_cache(SQLiteCache(database_path=".langchain.db"))
    spec_selector_output = select_spec_parts(query, spec, model)
    docs_reader_output = summarize_docs(query, docs, model)
    config_reader_output = summarize_config(
        query, config, config_description, docs_reader_output, model
    )
    # disable caching for the planner
    set_llm_cache(None)
    planner_stream = gen_plan(
        query,
        spec_selector_output,
        docs_reader_output,
        config_reader_output,
        customer_name,
        model,
    )
    return {
        "query": query,
        "spec_parts": spec_selector_output,
        "docs_summary": docs_reader_output,
        "config_summary": config_reader_output,
        "plan_stream": planner_stream,
    }


def select_spec_parts(query, spec, model):
    parsed_spec = yaml.safe_load(spec)
    spec_paths_summary = get_spec_paths_summary(parsed_spec)
    chain = (
        {
            "spec_paths": itemgetter("spec_paths"),
            "query": itemgetter("query"),
        }
        | prompts.oas_path_selector_prompt
        | model
        | StrOutputParser()
    )
    params = {"spec_paths": "\n".join(spec_paths_summary), "query": query}
    path_selector_output = chain.invoke(params)
    paths = extract_spec_paths(path_selector_output)
    return get_selected_spec_parts(parsed_spec, paths)


def get_spec_paths_summary(spec):
    paths = []
    for path, methods in spec["paths"].items():
        for operation in methods.values():
            if "summary" in operation:
                paths.append(path + ": " + operation["summary"])
    return paths


def extract_spec_paths(path_selector_output):
    bullet_point_regex = r"- (.*)"
    bullet_points = re.findall(bullet_point_regex, path_selector_output)
    return list(map(lambda path: path.split(":")[0], bullet_points))


def get_selected_spec_parts(spec, paths):
    spec_parts = []
    # always add security, securitySchemes, and server url, if present
    if spec["security"]:
        spec_parts.append(yaml.dump({"security": spec["security"]}))
    if spec["components"] and spec["components"]["securitySchemes"]:
        spec_parts.append(
            yaml.dump({"securitySchemes": spec["components"]["securitySchemes"]})
        )
    if spec["servers"]:
        spec_parts.append(yaml.dump({"servers": spec["servers"]}))
    for path in paths:
        spec_parts.append(yaml.dump({path: spec["paths"][path]}))
    return spec_parts


def summarize_docs(query, docs, model):
    docs_summaries = []
    for doc in docs:
        chain = (
            {
                "document": itemgetter("document"),
                "query": itemgetter("query"),
            }
            | prompts.docs_reader_prompt
            | model
            | StrOutputParser()
        )
        params = {"document": doc, "query": query}
        docs_summaries.append(chain.invoke(params))
    return format_docs(docs_summaries)


def summarize_config(query, config, config_description, docs_summary, model):
    chain = (
        {
            "config": itemgetter("config"),
            "config_description": itemgetter("config_description"),
            "docs_summary": itemgetter("docs_summary"),
            "query": itemgetter("query"),
        }
        | prompts.config_reader_prompt
        | model
        | StrOutputParser()
    )
    params = {
        "config": format_config(config),
        "config_description": config_description,
        "query": query,
        "docs_summary": docs_summary,
    }
    return chain.invoke(params)


def gen_plan(query, spec_parts, docs_summary, config_summary, customer_name, model):
    chain = (
        {
            "spec_parts": itemgetter("spec_parts"),
            "query": itemgetter("query"),
            "docs_summary": itemgetter("docs_summary"),
            "config_summary": itemgetter("config_summary"),
            "customer_name": itemgetter("customer_name"),
        }
        | prompts.planner_prompt
        | model
        | StrOutputParser()
    )
    params = {
        "spec_parts": format_spec_parts(spec_parts),
        "query": query,
        "docs_summary": docs_summary,
        "config_summary": config_summary,
        "customer_name": customer_name,
    }
    return chain.stream(params)


def read_spec(spec_path):
    with open(spec_path) as spec:
        return spec.read()


def read_docs(docs_paths):
    docs = []
    for doc_path in docs_paths:
        with open(doc_path) as doc:
            docs.append(doc.read())
    return docs


def format_docs(docs):
    return "\n\n".join(docs)


def format_config(config: dict):
    return json.dumps(config)


def format_spec_parts(parts):
    return "\n---\n".join(parts)
