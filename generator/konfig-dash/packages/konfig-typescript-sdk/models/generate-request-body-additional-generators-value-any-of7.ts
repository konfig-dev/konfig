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
import { GenerateRequestBodyGeneratorsAndroidCopyFilesInner } from './generate-request-body-generators-android-copy-files-inner';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsAndroidFilesValue } from './generate-request-body-generators-android-files-value';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsAndroidGit } from './generate-request-body-generators-android-git';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsAndroidTest } from './generate-request-body-generators-android-test';

/**
 * 
 * @export
 * @interface GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
 */
export interface GenerateRequestBodyAdditionalGeneratorsValueAnyOf7 {
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'generator': GenerateRequestBodyAdditionalGeneratorsValueAnyOf7GeneratorEnum;
    /**
     * 
     * @type {{ [key: string]: GenerateRequestBodyGeneratorsAndroidFilesValue; }}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'files'?: { [key: string]: GenerateRequestBodyGeneratorsAndroidFilesValue; };
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'version': string;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidGit}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'git': GenerateRequestBodyGeneratorsAndroidGit;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'outputDirectory': string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'readmeSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'readmeSupportingDescriptionSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'readmeDescriptionSnippet'?: string;
    /**
     * Configure copying a set of files from a source to a destination. This is useful if you have custom implementations that you would like duplicated across multiple SDK repos.
     * @type {Array<GenerateRequestBodyGeneratorsAndroidCopyFilesInner>}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'copyFiles'?: Array<GenerateRequestBodyGeneratorsAndroidCopyFilesInner>;
    /**
     * Filepath to file containing override for the section in generated documentation for setting up authentication in the SDK.
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'apiDocumentationAuthenticationPartial'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'disabled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'defaultTimeout'?: number;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'userAgent'?: string;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidTest}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'test'?: GenerateRequestBodyGeneratorsAndroidTest;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'language': GenerateRequestBodyAdditionalGeneratorsValueAnyOf7LanguageEnum;
    /**
     * com.acme
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'groupId': string;
    /**
     * acme-kotlin-sdk
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'artifactId': string;
}

type GenerateRequestBodyAdditionalGeneratorsValueAnyOf7GeneratorEnum = 'kotlin'
type GenerateRequestBodyAdditionalGeneratorsValueAnyOf7LanguageEnum = 'kotlin'


