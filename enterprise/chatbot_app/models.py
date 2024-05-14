import uuid
from django.db import models
from django.contrib.auth.models import User
from datetime import datetime


class Organization(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Space(models.Model):
    name = models.CharField(max_length=100)

    organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name="spaces"
    )


class CurrentUserSpace(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="user_spaces", unique=True
    )
    space = models.OneToOneField(
        Space, on_delete=models.CASCADE, related_name="user_spaces"
    )


class CurrentUserOrganization(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="user_organizations", unique=True
    )
    organization = models.OneToOneField(
        Organization, on_delete=models.CASCADE, related_name="user_organizations"
    )


class Chat(models.Model):
    chat_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    space = models.ForeignKey(Space, on_delete=models.CASCADE, related_name="chats")
    name = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    form_data = models.JSONField(default=dict)
    configuration_data = models.JSONField(default=dict)

    def save(self, *args, **kwargs):
        if not self.name:
            self.name = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
        super(Chat, self).save(*args, **kwargs)


class Configuration(models.Model):
    chat = models.ForeignKey(
        Chat, on_delete=models.CASCADE, related_name="configurations"
    )
    data = models.JSONField(default=dict)


MEMBERSHIP_ROLES = (
    ("owner", "Owner"),
    ("admin", "Admin"),
    ("user", "User"),
)


class Membership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="memberships")
    organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name="memberships"
    )
    role = models.CharField(max_length=5, choices=MEMBERSHIP_ROLES)


class Message(models.Model):
    user_message = models.TextField()
    bot_message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name="messages")
