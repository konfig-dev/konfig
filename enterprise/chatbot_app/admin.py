from django.contrib import admin
from .models import Space
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import (
    Space,
    Chat,
    Message,
    Organization,
    Membership,
    CurrentUserSpace,
    CurrentUserOrganization,
)


class OrganizationInline(admin.TabularInline):
    model = CurrentUserOrganization
    extra = 1
    verbose_name_plural = "organizations"


# Define an inline admin descriptor for Employee model
# which acts a bit like a singleton
class SpaceInline(admin.TabularInline):
    model = CurrentUserSpace
    extra = 1
    verbose_name_plural = "spaces"


class MembershipInline(admin.TabularInline):
    model = Membership
    extra = 1
    verbose_name_plural = "memberships"


# Define a new User admin
class UserAdmin(BaseUserAdmin):
    inlines = [OrganizationInline, SpaceInline, MembershipInline]


admin.site.register(Space)
admin.site.register(Chat)
admin.site.register(Message)
admin.site.register(Organization)
admin.site.register(Membership)
admin.site.unregister(User)
admin.site.register(User, UserAdmin)
