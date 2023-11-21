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
CodegenModel{name='InvalidArrayArray', parent='list', parentSchema='null', interfaces=null, interfaceModels=[], allParents=null, parentModel=null, children=[], anyOf=[], oneOf=[], allOf=[], classname='InvalidArrayArray', title='null', description='null', classVarName='invalid_array_array', modelJson='{
  "type" : "array",
  "items" : {
    "type" : "string"
  }
}', dataType='typing.List[str]', xmlPrefix='null', xmlNamespace='null', xmlName='null', classFilename='invalid_array_array', unescapedDescription='null', discriminator=null, defaultValue='null', arrayModelType='null', isAlias=false, isString=false, isInteger=false, isShort=false, isLong=false, isUnboundedInteger=false, isBoolean=false, isNumber=false, isNumeric=false, isFloat=false, isDouble=false, isDate=false, isDateTime=false, vars=[], allVars=[], nonNullableVars=[], requiredVars=[], optionalVars=[], readOnlyVars=[], readWriteVars=[], parentVars=[], allowableValues=null, mandatory=[], allMandatory=[], imports=[], hasVars=false, emptyVars=false, hasMoreModels=false, hasEnums=false, isEnum=false, isNullable=false, hasRequired=false, hasOptional=false, isArray=true, hasChildren=false, isMap=false, isDeprecated=false, hasOnlyReadOnly=true, externalDocumentation=null, vendorExtensions={}, additionalPropertiesType='null', maxProperties=null, minProperties=null, uniqueItems=false, uniqueItemsBoolean=null, maxItems=null, minItems=null, maxLength=null, minLength=null, exclusiveMinimum=false, exclusiveMaximum=false, minimum='null', maximum='null', pattern='null', multipleOf='null', items='CodegenProperty{openApiType='string', baseName='items', complexType='null', getter='getInvalidArrayArray', setter='setInvalidArrayArray', description='null', dataType='str', datatypeWithEnum='str', dataFormat='null', name='invalid_array_array', min='null', max='null', defaultValue='null', defaultValueWithParam=' = data.invalid_array_array;', baseType='str', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='"string_example"', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isShort=false, isLong=false, isUnboundedInteger=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isInnerEnum=false, isAnyType=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCaseLowerFirst='invalidArrayArray', nameInCamelCase='InvalidArrayArray', nameInSnakeCase='null', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, uniqueItemsBoolean=null, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false, isNull=false, getAdditionalPropertiesIsAnyType=false, getHasVars=false, getHasRequired=false, getHasDiscriminatorWithNonEmptyMapping=false, composedSchemas=null, hasMultipleTypes=false, requiredVarsMap=null, ref=null, schemaIsFromAdditionalProperties=false, isBooleanSchemaTrue=false, isBooleanSchemaFalse=false, format=null, dependentRequired=null, contains=null}', additionalProperties='null', isModel='false', isNull='false, hasValidation='false, getAdditionalPropertiesIsAnyType=false, getHasDiscriminatorWithNonEmptyMapping=false, getIsAnyType=false, composedSchemas=null, hasMultipleTypes=false, isDecimal=false, isUUID=false, requiredVarsMap=null, ref=null, schemaIsFromAdditionalProperties=false, isBooleanSchemaTrue=false, isBooleanSchemaFalse=false, format=null, dependentRequired=null, contains=null}
"""
InvalidArrayArray = typing.List[str]
