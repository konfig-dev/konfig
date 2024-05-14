from datetime import datetime
from django.http import HttpRequest, HttpResponseBadRequest
from django.urls import reverse
from django.views.decorators.http import require_POST
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
from django.utils.safestring import mark_safe
from django.db.models import QuerySet
from django.db import transaction
from typing import TypedDict
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
import sys
import os

sys.path.append(
    os.path.join(os.path.dirname(__file__), "../../misc/building_ai_applications/demo")
)

from demo import generate_plan, generate_guide

from .util.generate_template_for_guide import generate_template_for_guide
from .util.get_operations import Operation, get_operations
from .util.get_documents import Document, get_documents
from .util.get_customers import Customer, get_customers
from .models import (
    CurrentUserOrganization,
    Membership,
    Message,
    Chat,
    CurrentUserSpace,
    Organization,
    Space,
)
import requests
import os
import time

channel_layer = get_channel_layer()


@require_http_methods(["POST"])
@login_required
def generate_draft_template(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    if chat_id is None:
        raise ValueError("Chat id is not provided")
    chat = Chat.objects.get(chat_id=chat_id)
    query = chat.form_data.get("topic")
    language = chat.form_data.get("language")
    customer_id = chat.form_data.get("customer")
    config = get_customer_configuration(customer_id)
    customer_name = get_customer_name(customer_id)
    plan = generate_plan(query, language, config, customer_name)
    stream = plan["plan_stream"]
    tokens = []
    for chunk in stream:
        print(chunk)
        tokens.append(chunk)
        async_to_sync(channel_layer.group_send)(
            chat_id, {"type": "template.update", "template": "".join(tokens)}
        )
    final_plan = "".join(tokens)
    chat.form_data["draft_template"] = final_plan
    # delete plan_stream since its not serializable
    del plan["plan_stream"]
    # set "plan" to final plan
    plan["plan"] = final_plan
    chat.form_data["plan"] = plan
    chat.save()
    context = get_context_data(request, chat_id=chat_id)
    return render(request, "_review_generated_template_inner.html", context)


def get_customer_name(customer_id: str):
    customers = get_customers(all_customers=True)
    for customer in customers:
        if customer["id"] == customer_id:
            return customer["name"]
    raise ValueError(f"Invalid customer_id: {customer_id}")


@require_http_methods(["POST"])
@login_required
def submit_template(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    if chat_id is None:
        raise ValueError("Chat id is not provided")
    template = request.POST.get("template")
    chat = Chat.objects.get(chat_id=chat_id)
    chat.form_data["final_template"] = template
    chat.form_data["plan"]["plan"] = template
    chat.save()
    context = get_context_data(request, chat_id=chat_id)
    response = render(request, "chat_container.html", context)
    response["HX-Trigger-After-Settle"] = "generate-guide"
    return response


@require_http_methods(["POST"])
@login_required
def generate_onboarding_guide(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    if chat_id is None:
        raise ValueError("Chat id is not provided")
    chat = Chat.objects.get(chat_id=chat_id)
    plan = chat.form_data["plan"]
    stream = generate_guide(plan)
    tokens = []
    for chunk in stream:
        print(chunk)
        tokens.append(chunk)
        async_to_sync(channel_layer.group_send)(
            chat_id, {"type": "guide.update", "guide": "".join(tokens)}
        )
    final_guide = "".join(tokens)
    chat.form_data["current_guide"] = final_guide
    chat.save()
    context = get_context_data(request, chat_id=chat_id)
    return render(request, "_review_onboarding_guide_inner.html", context)


@require_http_methods(["GET"])
@login_required
def customer_configuration(request: HttpRequest):
    customer_id = request.GET.get("customer_id")
    if customer_id == "A":
        configurations = {
            "configurations": [
                {
                    "id": "A",
                    "name": "Customer A",
                },
            ]
        }
    elif customer_id == "B":
        configurations = {
            "configurations": [
                {
                    "id": "B",
                    "name": "Customer B",
                },
            ]
        }
    else:
        raise ValueError(f"Invalid customer_id: {customer_id}")

    return render(request, "customer_configurations.html", configurations)


@require_http_methods(["POST"])
@login_required
def save_topic(request: HttpRequest):
    topic = request.POST.get("topic")

    if topic is None:
        raise ValueError("Topic is not selected")

    chat_id = request.POST.get("chat_id")
    chat = Chat.objects.get(chat_id=chat_id)
    chat.name = topic
    chat.form_data["topic"] = topic
    chat.save()
    context = get_context_data(request, chat_id=str(chat.chat_id))
    response = render(request, "chat_container.html", context)
    response["HX-Trigger-After-Settle"] = "search-docs"
    return response


@require_http_methods(["POST"])
@login_required
def select_language(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    language = request.POST.get("language")

    if language is None:
        raise ValueError("Language is not selected")

    chat = Chat.objects.get(chat_id=chat_id)
    chat.form_data["language"] = language
    chat.save()
    context = get_context_data(request, chat_id=str(chat.chat_id))
    response = render(request, "chat_container.html", context)
    response["HX-Trigger-After-Settle"] = "generate-template"
    return response


@require_http_methods(["POST"])
@login_required
def select_relevant_documents(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    selected_documents = request.POST.getlist("selected_documents[]")
    documents = get_documents(ids=selected_documents)
    chat = Chat.objects.get(chat_id=chat_id)
    chat.form_data["selected_documents"] = documents
    chat.save()
    context = get_context_data(request, chat_id=str(chat.chat_id))
    response = render(request, "chat_container.html", context)
    response["HX-Trigger-After-Settle"] = "search-operations"
    return response


@require_http_methods(["POST"])
@login_required
def select_relevant_operations(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    selected_operations = request.POST.getlist("selected_operations[]")
    operations = get_operations(ids=selected_operations)
    chat = Chat.objects.get(chat_id=chat_id)
    chat.form_data["selected_operations"] = operations
    chat.save()
    context = get_context_data(request, chat_id=str(chat.chat_id))
    response = render(request, "chat_container.html", context)
    return response


@require_http_methods(["POST"])
@login_required
def search_relevant_operations(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    operations = get_operations()
    chat = Chat.objects.get(chat_id=chat_id)
    chat.form_data["searched_operations"] = operations
    chat.save()
    time.sleep(2)
    return render(
        request,
        "_select_relevant_operations_search_results.html",
        {"searched_operations": operations, "current_chat": chat},
    )


@require_http_methods(["POST"])
@login_required
def search_relevant_documents(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    documents = get_documents()
    chat = Chat.objects.get(chat_id=chat_id)
    chat.form_data["searched_documents"] = documents
    chat.save()
    time.sleep(3)
    return render(
        request,
        "_select_relevant_docs_search_results.html",
        {"searched_documents": documents, "current_chat": chat},
    )


@require_http_methods(["POST"])
@login_required
def search_customer(request: HttpRequest):
    search = request.POST.get("search")
    customers = get_customers(filter=search)
    time.sleep(1)
    return render(
        request,
        "_customer_search_results.html",
        {"customers": customers},
    )


@require_http_methods(["POST"])
@login_required
def select_customer(request: HttpRequest):
    customer_id = request.POST.get("customer_id")
    if customer_id not in ["customer_a", "customer_b"]:
        raise ValueError(f"Invalid customer_id: {customer_id}")
    current_space = CurrentUserSpace.objects.get(user_id=request.user.pk).space
    chat = Chat.objects.create(space_id=current_space.pk)
    chat.form_data["customer"] = customer_id
    chat.save()
    context = get_context_data(request, chat_id=str(chat.chat_id))
    response = render(request, "chat_container.html", context)
    response["HX-Push-Url"] = reverse(
        "specific_chat_view", kwargs={"chat_id": chat.chat_id}
    )
    return response


@require_http_methods(["POST"])
@login_required
def save_onboarding_form(request: HttpRequest):
    customer_id = request.POST.get("customer_id")
    chat_id = request.POST.get("chat_id")
    current_space = CurrentUserSpace.objects.get(user_id=request.user.pk).space

    if customer_id == "A":
        form_data = {
            "customer": "A",
        }
    elif customer_id == "B":
        form_data = {
            "customer": "B",
        }
    else:
        raise ValueError(f"Invalid customer_id: {customer_id}")

    if chat_id is None:
        chat = Chat.objects.create(space_id=current_space.pk, form_data=form_data)
        context = get_context_data(request, chat_id=str(chat.chat_id))
        response = render(request, "chat_container.html", context)
        response["HX-Push-Url"] = reverse(
            "specific_chat_view", kwargs={"chat_id": chat.chat_id}
        )
        return response
    else:
        raise NotImplementedError("Not implemented")


@login_required
def guides_view(request: HttpRequest):
    context_data = get_context_data(request)
    return render(
        request,
        "guides.html",
        context_data,
    )


@login_required
def chat_view(request: HttpRequest):
    current_space = CurrentUserSpace.objects.get(user_id=request.user.pk).space
    if request.method == "POST":
        user_message = request.POST.get("message")
        if user_message is None:
            return HttpResponseBadRequest("No message provided")

        # create a new chat
        chat = Chat.objects.create(space_id=current_space.pk)
        bot_message = get_ai_response(user_message)
        Message.objects.create(
            user_message=user_message, bot_message=bot_message, chat=chat
        )
        context_data = get_context_data(request, chat_id=str(chat.chat_id))
        response = render(request, "chat_container.html", context_data)
        response["HX-Push-Url"] = reverse(
            "specific_chat_view", kwargs={"chat_id": chat.chat_id}
        )
        return response

    context_data = get_context_data(request)
    return render(
        request,
        "chat.html",
        context_data,
    )


@login_required
def specific_chat_view(request: HttpRequest, chat_id: str):
    is_allowed = can_user_see_chat(request.user.pk, chat_id)
    if not is_allowed:
        return HttpResponseBadRequest("User is not allowed to see this chat")

    # if POST request, then send a message
    if request.method == "POST":
        user_message = request.POST.get("message")
        if user_message is None:
            return HttpResponseBadRequest("No message provided")
        chat = Chat.objects.get(chat_id=chat_id)
        bot_message = get_ai_response(user_message)
        Message.objects.create(
            user_message=user_message, bot_message=bot_message, chat=chat
        )
        context_data = get_context_data(request, chat_id)
        return render(request, "chatbox.html", context_data)

    context_data = get_context_data(request, chat_id)
    return render(request, "chat.html", context_data)


def can_user_see_chat(user_id: int, chat_id: str) -> bool:
    return Chat.objects.filter(
        chat_id=chat_id, space__organization__memberships__user_id=user_id
    ).exists()


@login_required
def organization_select_view(request: HttpRequest):
    organization_id = request.GET.get("organization_id")

    # make sure user has membership to the organization
    if not Membership.objects.filter(
        user_id=request.user.pk, organization_id=organization_id
    ).exists():
        raise ValueError("User is not apart of the organization")

    # change current organization to the selected organization
    with transaction.atomic():
        CurrentUserOrganization.objects.filter(user_id=request.user.pk).delete()
        CurrentUserOrganization.objects.create(
            user_id=request.user.pk, organization_id=organization_id
        )

    context_data = get_context_data(request)
    response = render(request, "chat_container.html", context_data)
    response["HX-Push-Url"] = reverse("chat_view")
    return response


@login_required
def create_organization_view(request: HttpRequest):
    organization = Organization.objects.create()

    # set the current organization to the newly created organization and add membership of role owner
    with transaction.atomic():
        CurrentUserOrganization.objects.filter(user_id=request.user.pk).delete()
        CurrentUserOrganization.objects.create(
            user_id=request.user.pk, organization_id=organization.pk
        )
        Membership.objects.create(
            user_id=request.user.pk, organization_id=organization.pk, role="owner"
        )

    context_data = get_context_data(request)
    return render(request, "chat_container.html", context_data)


@login_required
def create_space_view(request: HttpRequest):
    current_organization = CurrentUserOrganization.objects.get(
        user_id=request.user.pk
    ).organization
    space = Space.objects.create(organization_id=current_organization.pk)

    # set the current space to the newly created space
    with transaction.atomic():
        CurrentUserSpace.objects.filter(user_id=request.user.pk).delete()
        CurrentUserSpace.objects.create(user_id=request.user.pk, space_id=space.pk)

    context_data = get_context_data(request)
    return render(request, "chat_container.html", context_data)


@login_required
def space_select_view(request: HttpRequest):
    space_id = request.GET.get("space_id")
    space = Space.objects.get(id=space_id)

    # set the current space to the newly selected space
    with transaction.atomic():
        CurrentUserSpace.objects.filter(user_id=request.user.pk).delete()
        CurrentUserSpace.objects.create(user_id=request.user.pk, space_id=space.pk)

    context_data = get_context_data(request)
    response = render(
        request,
        "chat_container.html",
        context_data,
    )
    response["HX-Push-Url"] = reverse("chat_view")
    return response


class Language(TypedDict):
    name: str


class Guide(TypedDict):
    id: str
    topic: str | None
    customer: str | None
    created_at: datetime


class ChatData(TypedDict):
    current_organization: Organization
    current_space: Space
    current_topic: str | None
    current_chat: Chat | None
    current_customer: str | None
    current_language: str | None
    current_guide: str | None
    final_template: str | None
    draft_template: str | None
    organizations: QuerySet[Organization]
    customers: list[Customer]
    guides: list[Guide]
    searched_documents: list[Document] | None
    selected_documents: list[Document] | None
    searched_operations: list[Operation] | None
    selected_operations: list[Operation] | None
    spaces: QuerySet[Space]
    chats: QuerySet[Chat]
    languages: list[Language]
    messages: QuerySet[Message] | None


def get_customer_configuration(customer_id: str) -> dict:
    customers = get_customers(all_customers=True)
    for customer in customers:
        if customer["id"] == customer_id:
            return customer["configuration"]
    raise ValueError(f"Invalid customer_id: {customer_id}")


def get_context_data(request: HttpRequest, chat_id: str | None = None) -> ChatData:
    user = request.user
    user_id = user.pk
    current_user_organization_edge = CurrentUserOrganization.objects.filter(
        user_id=user_id
    ).first()
    if not current_user_organization_edge:
        # get memberships and select the first one
        membership = Membership.objects.filter(user_id=user_id).first()
        if not membership:
            # create a new organization and membership
            current_organization = Organization.objects.create()
            membership = Membership.objects.create(
                user_id=user_id, organization_id=current_organization.pk
            )
        else:
            current_organization = membership.organization
    else:
        current_organization = current_user_organization_edge.organization

    memberships = Membership.objects.filter(user_id=user_id)
    organizations = Organization.objects.filter(memberships__in=memberships)

    # get spaces from current organization
    spaces = Space.objects.filter(organization=current_organization)

    current_user_space_edge = CurrentUserSpace.objects.filter(user_id=user_id).first()
    if not current_user_space_edge:
        # create a new space and current user space edge
        current_space = Space.objects.create(organization_id=current_organization.pk)
        current_user_space_edge = CurrentUserSpace.objects.create(
            user_id=user_id, space_id=current_space.pk
        )
    else:
        current_space = current_user_space_edge.space

    # if space is not apart of the current organization, set the current space to the first space of the current organization
    if current_space.organization.pk != current_organization.pk:
        current_space = Space.objects.filter(organization=current_organization).first()
        # create space for this org if it doesn't exist
        if not current_space:
            current_space = Space.objects.create(organization=current_organization)
    # modify CurrentUserSpace in this case. Delete existing one and create new one
    with transaction.atomic():
        CurrentUserSpace.objects.filter(user_id=user_id).delete()
        CurrentUserSpace.objects.create(user_id=user_id, space_id=current_space.pk)

    if chat_id:
        chat = Chat.objects.get(chat_id=chat_id)
        messages = Message.objects.filter(chat=chat)
    else:
        chat = None
        messages = None

    chats = Chat.objects.filter(space=current_space).order_by("-created_at")
    form_data = chat.form_data if chat else None
    customer = form_data.get("customer") if form_data else None
    language = form_data.get("language") if form_data else None
    current_topic = form_data.get("topic") if form_data else None
    searched_documents = form_data.get("searched_documents") if form_data else None
    selected_documents = form_data.get("selected_documents") if form_data else None
    searched_operations = form_data.get("searched_operations") if form_data else None
    selected_operations = form_data.get("selected_operations") if form_data else None

    current_guide = form_data.get("current_guide") if form_data else None
    if current_guide:
        current_guide = current_guide.replace("`", "\\`").replace("$", "\\$")

    draft_template = form_data.get("draft_template") if form_data else None
    if draft_template:
        draft_template = draft_template.replace("`", "\\`").replace("$", "\\$")

    final_template = form_data.get("final_template") if form_data else None
    if final_template:
        final_template = final_template.replace("`", "\\`").replace("$", "\\$")

    customers = (
        get_customers(customer_id=customer) if customer is not None else get_customers()
    )

    guides: list[Guide] = []
    for chat_iter in chats:
        # get customer name from id
        customer_id = chat_iter.form_data.get("customer")
        all_customers = get_customers(all_customers=True)
        customer_name = next(
            (
                customer["name"]
                for customer in all_customers
                if customer["id"] == customer_id
            ),
            None,
        )
        chat_topic = chat_iter.form_data.get("topic")
        guides.append(
            {
                "id": str(chat_iter.chat_id),
                "topic": chat_topic,
                "customer": customer_name,
                "created_at": chat_iter.created_at,
            }
        )

    return {
        "current_topic": current_topic,
        "current_organization": current_organization,
        "current_space": current_space,
        "current_customer": customer,
        "current_language": language,
        "current_chat": chat,
        "current_guide": mark_safe(current_guide) if current_guide else None,
        "final_template": mark_safe(final_template) if final_template else None,
        "draft_template": mark_safe(draft_template) if draft_template else None,
        "organizations": organizations,
        "searched_documents": searched_documents,
        "selected_documents": selected_documents,
        "searched_operations": searched_operations,
        "selected_operations": selected_operations,
        "languages": [{"name": "TypeScript"}, {"name": "Python"}],
        "customers": customers,
        "spaces": spaces,
        "guides": guides,
        "chats": chats,
        "messages": messages,
    }


def get_ai_response(user_input: str) -> str:

    # Set up the API endpoint and headers
    endpoint = "https://api.openai.com/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {os.environ.get('OPENAI_API_KEY')}",
        "Content-Type": "application/json",
    }

    # Data payload
    messages = get_existing_messages()
    messages.append({"role": "user", "content": f"{user_input}"})
    data = {"model": "gpt-3.5-turbo", "messages": messages, "temperature": 0.7}
    response = requests.post(endpoint, headers=headers, json=data)
    response_data = response.json()
    print(f"{response_data = }")
    ai_message = response_data["choices"][0]["message"]["content"]
    return ai_message


def get_existing_messages() -> list:
    """
    Get all messages from the database and format them for the API.
    """
    formatted_messages = []

    for message in Message.objects.values("user_message", "bot_message"):
        formatted_messages.append({"role": "user", "content": message["user_message"]})
        formatted_messages.append(
            {"role": "assistant", "content": message["bot_message"]}
        )

    return formatted_messages
