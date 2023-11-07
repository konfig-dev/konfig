# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from python_splitit_client.apis.path_to_api import path_to_api

import enum


class PathValues(str, enum.Enum):
    API_INSTALLMENTPLANS_INSTALLMENT_PLAN_NUMBER = "/api/installmentplans/{installmentPlanNumber}"
    API_INSTALLMENTPLANS_SEARCH = "/api/installmentplans/search"
    API_INSTALLMENTPLANS_INITIATE = "/api/installmentplans/initiate"
    API_INSTALLMENTPLANS = "/api/installmentplans"
    API_INSTALLMENTPLANS_INSTALLMENT_PLAN_NUMBER_VERIFYAUTHORIZATION = "/api/installmentplans/{installmentPlanNumber}/verifyauthorization"
    API_INSTALLMENTPLANS_INSTALLMENT_PLAN_NUMBER_UPDATEORDER = "/api/installmentplans/{installmentPlanNumber}/updateorder"
    API_INSTALLMENTPLANS_UPDATEORDER = "/api/installmentplans/updateorder"
    API_INSTALLMENTPLANS_INSTALLMENT_PLAN_NUMBER_REFUND = "/api/installmentplans/{installmentPlanNumber}/refund"
    API_INSTALLMENTPLANS_INSTALLMENT_PLAN_NUMBER_CANCEL = "/api/installmentplans/{installmentPlanNumber}/cancel"
    API_INSTALLMENTPLANS_CHECKELIGIBILITY = "/api/installmentplans/check-eligibility"
