from django.urls import path
from .views import (
    chat_view,
    create_organization_view,
    create_space_view,
    customer_configuration,
    generate_draft_template,
    generate_onboarding_guide,
    guides_view,
    organization_select_view,
    save_topic,
    search_customer,
    search_relevant_documents,
    search_relevant_operations,
    select_customer,
    select_language,
    select_relevant_documents,
    select_relevant_operations,
    space_select_view,
    specific_chat_view,
    submit_template,
)

urlpatterns = [
    path("", chat_view, name="chat_view"),
    path("guides", guides_view, name="guides_view"),
    path("c/<str:chat_id>", specific_chat_view, name="specific_chat_view"),
    path("create_space", create_space_view, name="create_space_view"),
    path(
        "create_organization", create_organization_view, name="create_organization_view"
    ),
    path("space_select", space_select_view, name="space_select_view"),
    path(
        "organization_select", organization_select_view, name="organization_select_view"
    ),
    path(
        "customer_configuration", customer_configuration, name="customer_configuration"
    ),
    path("select_customer", select_customer, name="select_customer"),
    path("select_language", select_language, name="select_language"),
    path(
        "generate_onboarding_guide",
        generate_onboarding_guide,
        name="generate_onboarding_guide",
    ),
    path("search_customer", search_customer, name="search_customer"),
    path("save_topic", save_topic, name="save_topic"),
    path(
        "search_relevant_documents",
        search_relevant_documents,
        name="search_relevant_documents",
    ),
    path(
        "select_relevant_documents",
        select_relevant_documents,
        name="select_relevant_documents",
    ),
    path(
        "search_relevant_operations",
        search_relevant_operations,
        name="search_relevant_operations",
    ),
    path(
        "select_relevant_operations",
        select_relevant_operations,
        name="select_relevant_operations",
    ),
    path(
        "generate_draft_template",
        generate_draft_template,
        name="generate_draft_template",
    ),
    path("submit_template", submit_template, name="submit_template"),
]
