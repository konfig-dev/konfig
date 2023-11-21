# coding: utf-8

"""
    python-invalid-response API

    A simple API based for testing python-invalid-response.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel


"""
CodegenModel{name='ObjectInsteadOfScalar', parent='null', parentSchema='null', interfaces=null, interfaceModels=[], allParents=null, parentModel=null, children=[], anyOf=[], oneOf=[], allOf=[], classname='ObjectInsteadOfScalar', title='null', description='null', classVarName='object_instead_of_scalar', modelJson='{
  "type" : "string"
}', dataType='str', xmlPrefix='null', xmlNamespace='null', xmlName='null', classFilename='object_instead_of_scalar', unescapedDescription='null', discriminator=null, defaultValue='null', arrayModelType='null', isAlias=true, isString=true, isInteger=false, isShort=false, isLong=false, isUnboundedInteger=false, isBoolean=false, isNumber=false, isNumeric=false, isFloat=false, isDouble=false, isDate=false, isDateTime=false, vars=[], allVars=[], nonNullableVars=[], requiredVars=[], optionalVars=[], readOnlyVars=[], readWriteVars=[], parentVars=[], allowableValues=null, mandatory=[], allMandatory=[], imports=[], hasVars=false, emptyVars=false, hasMoreModels=false, hasEnums=false, isEnum=false, isNullable=false, hasRequired=false, hasOptional=false, isArray=false, hasChildren=false, isMap=false, isDeprecated=false, hasOnlyReadOnly=true, externalDocumentation=null, vendorExtensions={}, additionalPropertiesType='null', maxProperties=null, minProperties=null, uniqueItems=false, uniqueItemsBoolean=null, maxItems=null, minItems=null, maxLength=null, minLength=null, exclusiveMinimum=false, exclusiveMaximum=false, minimum='null', maximum='null', pattern='null', multipleOf='null', items='null', additionalProperties='null', isModel='false', isNull='false, hasValidation='false, getAdditionalPropertiesIsAnyType=false, getHasDiscriminatorWithNonEmptyMapping=false, getIsAnyType=false, composedSchemas=null, hasMultipleTypes=false, isDecimal=false, isUUID=false, requiredVarsMap=null, ref=null, schemaIsFromAdditionalProperties=false, isBooleanSchemaTrue=false, isBooleanSchemaFalse=false, format=null, dependentRequired=null, contains=null}
"""
ObjectInsteadOfScalar = RootModel[str]
