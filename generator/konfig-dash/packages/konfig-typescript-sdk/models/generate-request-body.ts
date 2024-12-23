/* tslint:disable */
/* eslint-disable */
/**
 * Konfig REST API
 * To help you generate SDKs with Konfig
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This file is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyAdditionalGeneratorsValue } from './generate-request-body-additional-generators-value';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyAllObjectsHaveAdditionalProperties } from './generate-request-body-all-objects-have-additional-properties';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyFixConfig } from './generate-request-body-fix-config';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGenerators } from './generate-request-body-generators';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyOptionalParametersInner } from './generate-request-body-optional-parameters-inner';

/**
 * 
 * @export
 * @interface GenerateRequestBody
 */
export interface GenerateRequestBody {
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBody
     */
    'spec': string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBody
     */
    'konfigYaml': string;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'outputSpec'?: boolean;
    /**
     * 
     * @type {GenerateRequestBodyGenerators}
     * @memberof GenerateRequestBody
     */
    'generators': GenerateRequestBodyGenerators;
    /**
     * 
     * @type {{ [key: string]: GenerateRequestBodyAdditionalGeneratorsValue; }}
     * @memberof GenerateRequestBody
     */
    'additionalGenerators'?: { [key: string]: GenerateRequestBodyAdditionalGeneratorsValue; };
    /**
     * 
     * @type {GenerateRequestBodyFixConfig}
     * @memberof GenerateRequestBody
     */
    'fixConfig'?: GenerateRequestBodyFixConfig;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateRequestBody
     */
    'filterQueryParams'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateRequestBody
     */
    'filterTags'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateRequestBody
     */
    'filterModels'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateRequestBody
     */
    'filterRequestBodies'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'attachNullabletoAllResponseSchemas'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'validateRequiredPropertiesAndParametersAreNonEmpty'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'stripRequiredStringProperties'?: boolean;
    /**
     * Can be configured to make specified parameters optional in the   SDKs. This can be useful if you have a set of parameters you would rather   instantiate on the top-level client to avoid redundant passing of this   parameter. For example if you have a \"version\" parameter that you repeatedly   pass throughout the operations, you can instead make it optional, add it as a   client state, and implement a request hook to attach the \"version\" client   state to the operation.
     * @type {Array<GenerateRequestBodyOptionalParametersInner>}
     * @memberof GenerateRequestBody
     */
    'optionalParameters'?: Array<GenerateRequestBodyOptionalParametersInner>;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'doNotValidateGloballyRequiredSecurity'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBody
     */
    'infoContactEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBody
     */
    'infoContactName'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'omitInfoDescription'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'validateSpec'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBody
     */
    'infoContactUrl'?: string;
    /**
     * Overrides the path of progress.yaml which is used in the \"konfig fix\" CLI command. This is helpful if you have a staging and production OpenAPI Specification and you want to host two different SDK repos for staging and production releases but want to share the same progress for \"konfig fix\".
     * @type {string}
     * @memberof GenerateRequestBody
     */
    'progressYamlPath'?: string;
    /**
     * Order of tags to be processed by Konfig. This can be used to configure which operation is used when generated the getting started documentation in the generated README for an SDK.
     * @type {Array<string>}
     * @memberof GenerateRequestBody
     */
    'tagPriority'?: Array<string>;
    /**
     * Multiple tags can cause conflicts for TypeScript SDK
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'takeFirstTag'?: boolean;
    /**
     * Default array value is not supported in Java SDK
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'removeDefaultArrayValues'?: boolean;
    /**
     * Array data type is not supported in TypeScript SDK for OAS 3.1
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'convertArrayDataTypesToAny'?: boolean;
    /**
     * 
     * @type {GenerateRequestBodyAllObjectsHaveAdditionalProperties}
     * @memberof GenerateRequestBody
     */
    'allObjectsHaveAdditionalProperties'?: GenerateRequestBodyAllObjectsHaveAdditionalProperties;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateRequestBody
     */
    'requiredEnvironmentVariables'?: Array<string>;
}

