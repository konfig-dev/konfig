from langchain_core.prompts import ChatPromptTemplate

oas_path_selector_prompt = ChatPromptTemplate.from_messages([("system",
"""
You are an engineer with an expert understanding of APIs and OpenAPI specifications.
You are given a list of all the endpoints from an OpenAPI Specification, each with a summary of that endpoint's operations.
You are also given a query: a question about the API which the spec is describing.
You output a list of all the paths that are STRICTLY relevant to answering that query about the API, with nothing extraneous. Even if related, it must directly relate to answering the query for you to list it.
For example, if the query is "How do I create an account", you would list the path which creates an account, but not the path which lists all accounts.
The output should be structured as a simple bullet point list with no preamble or postamble.
"""
), ("user",
"""
# Query

{query}

# OpenAPI specification endpoint summaries

{spec_paths}
"""
)])

docs_reader_prompt = ChatPromptTemplate.from_messages([("system",
"""
You are an expert and reading, understanding, and synthesizing technical documentation.
Your company has been tasked with writing a technical guide about an API which answers a specific query about the API.
Carefully read through the document provided and write a detailed summary of the important information from these documents which is relevant to the query.
Output this as a list in bullet points with no preamble or postamble.
"""
), ("user",
"""
# Query

{query}

# Document

{document}
"""
)])

config_reader_prompt = ChatPromptTemplate.from_messages([("system",
"""
Your company has been tasked with writing a technical guide about an API which answers a specific query about the API.
This technical guide is personalized to onboard a specific customer. The customer has a specific configuration that must be incorporated into the guide.
You have a very specific job in this process: your job is to analyze the customer's configuration.
Summaries of additional documentation have been provided for additional context on the API.
Carefully read through the configuration and do ONLY the following:
- summarize the important information contained in the configuration which is specific to this customer's workflow. Be concise, and answer in bullet points.
"""
), ("user",
"""
# Query

{query}

# Document Summary

{docs_summary}

# Description of Configuration

{config_description}

# Configuration

{config}
"""
)])

data_template = """
# The Query
```
{query}
```

# Documents

## OpenAPI Spec: Selected Relevant Parts

{spec_parts}

## Summary of Additional Documents

{docs_summary}

## Explanation of Configuration

{config_summary}
"""

planner_prompt = ChatPromptTemplate.from_messages([("system",
"""
# Overview

You're working as a senior solutions engineer. 
Your task is to write a specifications document for a junior solutions engineer who is writing a personalized technical guide for a customer.
The guide is based on a query, the OpenAPI Specification, any relevant documentation, and also contains a configuration specific to that customer.

# Instructions

Write a specification document for the junior engineer who will write the personalized technical guide.
The specification document contains all the sections that you would like the junior engineer to have in their guide.
Each section should contain bullet points specifying what information should be contained in that section. 
When a section should include a code snippet, you should indicate this by starting a bullet point with "Code snippet:" followed by a detailed, specific description of the code snippet. 
Remember that this guide is configured towards a specific customer, so information from the configuration is used to tailor the guide to apply to this specific customer. You should include a section near the top entitled "Customer-Specific Configuration" which should contain a description of how the customer's configuration should be incorporated into the guide.
Even if some parts of the guide can be made more generic, the guide should be tailored to the customer's configuration specifically - do not include redundant generic information.
Format your output as a raw markdown document. This is VERY IMPORTANT: DO NOT INCLUDE "```markdown" at the start. To reiterate, do NOT wrap the output in a markdown code block.
The h1 header of the document should be # Title: "Guide For {customer_name}: X" where X is the query, but made into a statement instead of a question.
Do not include an "Appendix" section in your output.
Very Important: Do NOT include any additional preamble or postamble in your output; do NOT have any mention of the junior engineer; the ONLY output should be the plan document itself. For example, do NOT write at the end "This guide should provide a comprehensive understanding..." etc. 
"""), ("user", data_template )])

writer_prompt = ChatPromptTemplate.from_messages([("system",
"""
# Overview

You're working as a senior technical writer. 
Your task is to write a personlized technical guide document for an important customer.
The guide answers a specific query, and the answer is sourced from an the OpenAPI Specification, other relevant documentation, and also contains a configuration specific to that customer.
You are also given a plan/specification from the engineering department that outlines the structure and content of this personalized technical guide.

# Instructions

Write a personalized technical guide for the customer from the plan provided by engineering as well as summaries of information from the other documents.
The guide should be tailored to the customer's configuration specifically - do not include redundant generic information.
Write clean, clear, and concise code snippets where indicated in the plan.
Format your output as a raw markdown document. This is VERY IMPORTANT: DO NOT INCLUDE "```markdown" at the start. To reiterate, do NOT wrap the output in a markdown code block.
Do not include any additional preamble or postamble in your output. Do not try to add links to additional documentation or resources.
"""), ("user", 
"""
{plan}

-----

""" + data_template )])
