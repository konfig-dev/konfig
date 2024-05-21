# coding: utf-8

# flake8: noqa

# import all models into this package
# if you have many models here with many references from one model to another this may
# raise a RecursionError
# to avoid this, import only the models that you directly need like:
# from from python_circular_reference_2.model.pet import Pet
# or import this package, but before doing it, use:
# import sys
# sys.setrecursionlimit(n)

from python_circular_reference_2.model.has_optional_var import HasOptionalVar
from python_circular_reference_2.model.has_required_var import HasRequiredVar
