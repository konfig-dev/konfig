import json, re, yaml
import prompts
from operator import itemgetter
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI

class Plan:
    def __init__(self, query, spec_parts, docs_summary, config_summary, plan):
        self.query = query
        self.spec_parts = spec_parts
        self.docs_summary = docs_summary
        self.config_summary = config_summary
        self.plan = plan

config_description = "This json is the return value of the `Get Journey Parameters` endpoint."

def generate_plan(query, language, config):
    return generate_plan_helper(f"In {language}, " + query, "documents/spec.yaml", ["documents/creating-a-journey.md"], config, config_description)

def generate_guide(plan):
    model = ChatOpenAI(model="gpt-4-turbo", temperature=0, model_kwargs={"seed": 0})
    chain = (
        {
            "spec_parts": itemgetter("spec_parts"),
            "query": itemgetter("query"),
            "docs_summary": itemgetter("docs_summary"),
            "config_summary": itemgetter("config_summary"),
            "plan": itemgetter("plan")
        }
        | prompts.writer_prompt
        | model
        | StrOutputParser()
    )
    params = {
        "spec_parts": format_spec_parts(plan.spec_parts), 
        "query": plan.query, 
        "docs_summary": plan.docs_summary, 
        "config_summary": plan.config_summary,
        "plan": plan.plan
    }
    guide = chain.invoke(params)
    return edit_guide(guide, plan, model)

def edit_guide(guide, plan, model):
    chain = (
        {
            "spec_parts": itemgetter("spec_parts"),
            "query": itemgetter("query"),
            "docs_summary": itemgetter("docs_summary"),
            "config_summary": itemgetter("config_summary"),
            "plan": itemgetter("plan"),
            "guide": itemgetter("guide")
        }
        | prompts.editor_prompt
        | model
        | StrOutputParser()
    )
    params = {
        "spec_parts": format_spec_parts(plan.spec_parts), 
        "query": plan.query, 
        "docs_summary": plan.docs_summary, 
        "config_summary": plan.config_summary,
        "plan": plan.plan,
        "guide": guide
    }
    return chain.invoke(params)

def generate_plan_helper(query, spec_path, docs_paths, config, config_description):
    spec = read_spec(spec_path)
    docs = read_docs(docs_paths)
    model = ChatOpenAI(model="gpt-4-turbo", temperature=0, model_kwargs={"seed": 0})
    spec_selector_output = select_spec_parts(query, spec, model)
    docs_reader_output = summarize_docs(query, docs, model)
    config_reader_output = summarize_config(query, config, config_description, docs_reader_output, model)
    planner_output = gen_plan(query, spec_selector_output, docs_reader_output, config_reader_output, model)
    return Plan(query, spec_selector_output, docs_reader_output, config_reader_output, planner_output)

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
        spec_parts.append(yaml.dump({"securitySchemes": spec["components"]["securitySchemes"]}))
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
            "query": itemgetter("query")
        }
        | prompts.config_reader_prompt
        | model
        | StrOutputParser()
    )
    params = {"config": format_config(config), "config_description": config_description, "query": query, "docs_summary": docs_summary}
    return chain.invoke(params)

def gen_plan(query, spec_parts, docs_summary, config_summary, model):
    chain = (
        {
            "spec_parts": itemgetter("spec_parts"),
            "query": itemgetter("query"),
            "docs_summary": itemgetter("docs_summary"),
            "config_summary": itemgetter("config_summary"),
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
    }
    return chain.invoke(params)

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