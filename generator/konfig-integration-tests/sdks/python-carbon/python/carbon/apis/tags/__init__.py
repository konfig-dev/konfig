# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from carbon.apis.tag_to_api import tag_to_api

import enum


class TagValues(str, enum.Enum):
    INTEGRATIONS = "Integrations"
    FILES = "Files"
    UTILITIES = "Utilities"
    EMBEDDINGS = "Embeddings"
    WEBHOOKS = "Webhooks"
    AUTH = "Auth"
    USERS = "Users"
    DATA_SOURCES = "Data Sources"
    HEALTH = "Health"
    ORGANIZATIONS = "Organizations"
    GETTING_STARTED = "Getting Started"
    CARBON_CONNECT = "Carbon Connect"
    CONTACT_US = "Contact Us"
