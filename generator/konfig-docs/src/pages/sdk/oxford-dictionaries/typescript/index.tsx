import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function OxfordDictionariesTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="oxford-dictionaries-typescript-sdk"
      metaDescription={`Oxford Dictionaries, part of the Oxford Language Division, is a leading authority on the English language. It offers a wide range of language resources, including dictionaries, thesauruses, grammar guides, and language learning tools. Oxford Dictionaries provides accurate and up-to-date definitions, word origins, and usage examples to support language comprehension and communication.`}
      company="Oxford Dictionaries"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oxford-dictionaries/logo.png"
      clientNameCamelCase="oxfordDictionaries"
      homepage="developer.oxforddictionaries.com"
      lastUpdated={new Date("2024-03-13T17:55:08.060Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oxford-dictionaries/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oxford-dictionaries/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["media","collaboration","language","education","grammar","dictionaries","language_learning"]}
      methods={[
  {
    "url": "/domains/{source_domains_language}/{target_domains_language}",
    "method": "listAvailableDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available domains in a bilingual dataset",
    "parameters": [
      {
        "name": "sourceDomainsLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_DOMAINS_LANGUAGE"
      },
      {
        "name": "targetDomainsLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "TARGET_DOMAINS_LANGUAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexicalcategories, registers utility endpoints."
      },
      {
        "statusCode": "400",
        "description": "source_language and target_language are same."
      },
      {
        "statusCode": "404",
        "description": "Unknown source_language and/or target_language."
      }
    ]
  },
  {
    "url": "/domains/{source_language}",
    "method": "listMonolingualDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available domains in a monolingual dataset",
    "parameters": [
      {
        "name": "sourceLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANGUAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexicalcategories, registers utility endpoints."
      },
      {
        "statusCode": "404",
        "description": "Unknown source_language."
      }
    ]
  },
  {
    "url": "/entries/{source_language}/{word_id}/sentences",
    "method": "getCorpusSentences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "The Sentence Dictionary",
    "typeScriptTag": "theSentenceDictionary",
    "description": "Retrieve corpus sentences for a given word",
    "parameters": [
      {
        "name": "sourceLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANGUAGE"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive.",
        "example": "WORD_ID",
        "default": "ace"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the 'sentences' endpoint"
      },
      {
        "statusCode": "404",
        "description": "No entry is found matching supplied id and source_language\n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/entries/{source_lang}/{word_id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dictionary entries",
    "typeScriptTag": "dictionaryEntries",
    "description": "Retrieve dictionary information for a given word",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive.",
        "example": "WORD_ID",
        "default": "ace"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the 'entries' endpoints"
      },
      {
        "statusCode": "404",
        "description": "No entry is found matching supplied id and source_lang or filters are not recognized\n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/entries/{source_lang}/{word_id}/antonyms",
    "method": "getAntonyms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Thesaurus",
    "typeScriptTag": "thesaurus",
    "description": "Retrieve words that mean the opposite",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive.",
        "example": "WORD_ID",
        "default": "ace"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for thesaurus endpoint"
      },
      {
        "statusCode": "404",
        "description": "No entry is found matching supplied id and source_lang or filters are not recognized\n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/entries/{source_lang}/{word_id}/regions={region}",
    "method": "specifyDictionaryRegion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dictionary entries",
    "typeScriptTag": "dictionaryEntries",
    "description": "Specify GB or US dictionary for English entry search",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive.",
        "example": "WORD_ID",
        "default": "ace"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "Region filter parameter. gb = Oxford Dictionary of English. us = New Oxford American Dictionary.",
        "example": "REGION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the 'entries' endpoints"
      },
      {
        "statusCode": "404",
        "description": "no entry is found matching supplied source_lang and id\nand/or that entry has no senses with translations in the target language. \n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/entries/{source_lang}/{word_id}/synonyms",
    "method": "getSimilarWords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Thesaurus",
    "typeScriptTag": "thesaurus",
    "description": "Retrieve words that are similar",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive.",
        "example": "WORD_ID",
        "default": "ace"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for thesaurus endpoint"
      },
      {
        "statusCode": "404",
        "description": "No entry is found matching supplied id and source_lang or filters are not recognized\n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/entries/{source_lang}/{word_id}/synonyms;antonyms",
    "method": "getSynonymsAntonyms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Thesaurus",
    "typeScriptTag": "thesaurus",
    "description": "Retrieve synonyms and antonyms for a given word",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive.",
        "example": "WORD_ID",
        "default": "ace"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for thesaurus endpoint"
      },
      {
        "statusCode": "404",
        "description": "No entry is found matching supplied id and source_lang or filters are not recognized\n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/entries/{source_lang}/{word_id}/{filters}",
    "method": "applyFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dictionary entries",
    "typeScriptTag": "dictionaryEntries",
    "description": "Apply filters to response",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive.",
        "example": "WORD_ID",
        "default": "ace"
      },
      {
        "name": "filters",
        "schema": "string",
        "required": true,
        "description": "Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.",
        "example": "FILTERS",
        "default": "grammaticalFeatures=singular,past;lexicalCategory=noun"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the 'entries' endpoints"
      },
      {
        "statusCode": "404",
        "description": "no entry is found matching supplied source_lang and id\nand/or that entry has no senses with translations in the target language. \n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/entries/{source_translation_language}/{word_id}/translations={target_translation_language}",
    "method": "getWordTranslation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Translation",
    "typeScriptTag": "translation",
    "description": "Retrieve translation for a given word",
    "parameters": [
      {
        "name": "sourceTranslationLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_TRANSLATION_LANGUAGE"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "The source word",
        "example": "WORD_ID",
        "default": "change"
      },
      {
        "name": "targetTranslationLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "TARGET_TRANSLATION_LANGUAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the 'entries' endpoints"
      },
      {
        "statusCode": "400",
        "description": "any of target languages is unknown"
      },
      {
        "statusCode": "404",
        "description": "no entry is found matching supplied source_lang and id\nand/or that entry has no senses with translations in the target language(s). \n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/filters",
    "method": "listAvailableFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available filters",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the Filters endpoint."
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data."
      }
    ]
  },
  {
    "url": "/filters/{endpoint}",
    "method": "listEndpointFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available filters for specific endpoint",
    "parameters": [
      {
        "name": "endpoint",
        "schema": "string",
        "required": true,
        "description": "Name of the endpoint.",
        "example": "ENDPOINT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the Filters endpoint."
      },
      {
        "statusCode": "404",
        "description": "Unknown endpoint."
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data."
      }
    ]
  },
  {
    "url": "/grammaticalFeatures/{source_language}",
    "method": "getGrammaticalFeatures",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available grammatical features in a dataset",
    "parameters": [
      {
        "name": "sourceLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code. If provided output will be filtered by sourceLanguage.",
        "example": "SOURCE_LANGUAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexicalcategories, registers utility endpoints."
      },
      {
        "statusCode": "404",
        "description": "Unknown source_language."
      }
    ]
  },
  {
    "url": "/inflections/{source_lang}/{word_id}/{filters}",
    "method": "checkAndRetrieveRootForm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lemmatron",
    "typeScriptTag": "lemmatron",
    "description": "Check a word exists in the dictionary and retrieve its root form",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG"
      },
      {
        "name": "filters",
        "schema": "string",
        "required": true,
        "description": "Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.",
        "example": "FILTERS",
        "default": "grammaticalFeatures=singular,past;lexicalCategory=noun"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "The input word",
        "example": "WORD_ID",
        "default": "swimming"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the inflections endpoint."
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/languages",
    "method": "listAvailableLanguages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available dictionaries",
    "parameters": [
      {
        "name": "sourceLanguage",
        "schema": "string",
        "required": false,
        "description": "IANA language code. If provided output will be filtered by sourceLanguage."
      },
      {
        "name": "targetLanguage",
        "schema": "string",
        "required": false,
        "description": "IANA language code. If provided output will be filtered by sourceLanguage."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the languages endpoint."
      },
      {
        "statusCode": "404",
        "description": "Unknown sourceLanguage and/or targetLanguage."
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data."
      }
    ]
  },
  {
    "url": "/lexicalcategories/{language}",
    "method": "getLexicalCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available lexical categories in a dataset",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "LANGUAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexicalcategories, registers utility endpoints."
      },
      {
        "statusCode": "404",
        "description": "Unknown language."
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data."
      }
    ]
  },
  {
    "url": "/regions/{source_language}",
    "method": "listMonolingualRegions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available regions in a monolingual dataset",
    "parameters": [
      {
        "name": "sourceLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANGUAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for region endpoint."
      },
      {
        "statusCode": "404",
        "description": "Unknown source_language."
      }
    ]
  },
  {
    "url": "/registers/{source_language}",
    "method": "listMonolingualRegisters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available registers in a  monolingual dataset",
    "parameters": [
      {
        "name": "sourceLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANGUAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexicalcategories, registers utility endpoints."
      },
      {
        "statusCode": "404",
        "description": "Unknown source_language."
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data."
      }
    ]
  },
  {
    "url": "/registers/{source_register_language}/{target_register_language}",
    "method": "listBilingualRegisters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available registers in a bilingual dataset",
    "parameters": [
      {
        "name": "sourceRegisterLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_REGISTER_LANGUAGE"
      },
      {
        "name": "targetRegisterLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "TARGET_REGISTER_LANGUAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexicalcategories, registers utility endpoints."
      },
      {
        "statusCode": "400",
        "description": "source_language and target_language are same."
      },
      {
        "statusCode": "404",
        "description": "Unknown source_language and/or target_language."
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data."
      }
    ]
  },
  {
    "url": "/search/{source_lang}",
    "method": "getMatches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Retrieve possible matches to input",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search string",
        "default": "eye"
      },
      {
        "name": "prefix",
        "schema": "boolean",
        "required": false,
        "description": "Set prefix to true if you'd like to get results only starting with search string.",
        "default": "false"
      },
      {
        "name": "regions",
        "schema": "string",
        "required": false,
        "description": "If searching in English, filter words with specific region(s) either 'us' or 'gb'."
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limit the number of results per response. Default and maximum limit is 5000."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "Offset the start number of the result."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for wordlist endpoint."
      },
      {
        "statusCode": "404",
        "description": "No entry is found matching supplied id and source_lang or filters are not recognized\n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/search/{source_search_language}/translations={target_search_language}",
    "method": "possibleTranslations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Retrieve possible translation matches to input",
    "parameters": [
      {
        "name": "sourceSearchLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_SEARCH_LANGUAGE"
      },
      {
        "name": "targetSearchLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "TARGET_SEARCH_LANGUAGE"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search string.",
        "default": "eye"
      },
      {
        "name": "prefix",
        "schema": "boolean",
        "required": false,
        "description": "Set prefix to true if you'd like to get results only starting with search string.",
        "default": "false"
      },
      {
        "name": "regions",
        "schema": "string",
        "required": false,
        "description": "Filter words with specific region(s) E.g., regions=us. For now gb, us are available for en language."
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limit the number of results per response. Default and maximum limit is 5000."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "Offset the start number of the result."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for wordlist endpoint."
      },
      {
        "statusCode": "404",
        "description": "No entry is found matching supplied id and source_lang or filters are not recognized\n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/wordlist/{source_lang}/{filters_advanced}",
    "method": "getAdvancedWords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wordlist",
    "typeScriptTag": "wordlist",
    "description": "Retrieve list of words for category with advanced options",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG"
      },
      {
        "name": "filtersAdvanced",
        "schema": "string",
        "required": true,
        "description": "Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.",
        "example": "FILTERS_ADVANCED",
        "default": "lexicalCategory=Noun;domains=sport"
      },
      {
        "name": "exclude",
        "schema": "string",
        "required": false,
        "description": "Semicolon separated list of parameters-value pairs (same as filters). Excludes headwords that have any senses in specified exclusion attributes (lexical categories, domains, etc.) from results."
      },
      {
        "name": "excludeSenses",
        "schema": "string",
        "required": false,
        "description": "Semicolon separated list of parameters-value pairs (same as filters). Excludes only those senses of a particular headword that match specified exclusion attributes (lexical categories, domains, etc.) from results but includes the headword if it has other permitted senses."
      },
      {
        "name": "excludePrimeSenses",
        "schema": "string",
        "required": false,
        "description": "Semicolon separated list of parameters-value pairs (same as filters). Excludes a headword only if the primary sense matches the specified exclusion attributes (registers, domains only)."
      },
      {
        "name": "wordLength",
        "schema": "string",
        "required": false,
        "description": "Parameter to speficy the minimum (>), exact or maximum (<) length of the words required. E.g., >5 - more than 5 chars; <4 - less than 4 chars; >5<10 - from 5 to 10 chars; 3 - exactly 3 chars.",
        "default": ">5,<10"
      },
      {
        "name": "prefix",
        "schema": "string",
        "required": false,
        "description": "Filter words that start with prefix parameter",
        "default": "goal"
      },
      {
        "name": "exact",
        "schema": "boolean",
        "required": false,
        "description": "If exact=true wordlist returns a list of entries that exactly matches the search string. Otherwise wordlist lists entries that start with prefix string.",
        "default": "false"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limit the number of results per response. Default and maximum limit is 5000."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "Offset the start number of the result."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for wordlist endpoint."
      },
      {
        "statusCode": "400",
        "description": "disjoint sets of word_length values (eg <3>10); filter has no values; total number of filters > 20; filters and excludes values can not be the same; source_lang and translations can not be same; word_length conflicts with prefix length."
      },
      {
        "statusCode": "404",
        "description": "No entries is found matching supplied filters or lang or filters is not recognized.\n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/wordlist/{source_lang}/{filters_basic}",
    "method": "getCategoryWords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wordlist",
    "typeScriptTag": "wordlist",
    "description": "Retrieve a list of words in a category",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG"
      },
      {
        "name": "filtersBasic",
        "schema": "string",
        "required": true,
        "description": "Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.",
        "example": "FILTERS_BASIC",
        "default": "registers=Rare;domains=Art"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limit the number of results per response. Default and maximum limit is 5000."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "Offset the start number of the result"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for wordlist endpoint."
      },
      {
        "statusCode": "400",
        "description": "filter has no values; total number of filters > 20."
      },
      {
        "statusCode": "404",
        "description": "No entries is found matching supplied filters or lang or filters is not recognized.\n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/stats/frequency/ngrams/{source_lang}/{corpus}/{ngram-size}",
    "method": "getNgramFrequencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LexiStats",
    "typeScriptTag": "lexiStats",
    "description": "Retrieve the frequency of ngrams (1-4) derived from a corpus",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG",
        "default": "en"
      },
      {
        "name": "corpus",
        "schema": "string",
        "required": true,
        "description": "For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com",
        "example": "CORPUS",
        "default": "nmc"
      },
      {
        "name": "ngramSize",
        "schema": "string",
        "required": true,
        "description": "the size of ngrams requested (1-4)",
        "example": "NGRAM-SIZE",
        "default": 2
      },
      {
        "name": "tokens",
        "schema": "string",
        "required": false,
        "description": "List of tokens to filter. The tokens are separated by spaces, the list items are separated by comma (e.g., for bigrams (n=2) tokens=this is,this was, this will)",
        "default": "a word"
      },
      {
        "name": "contains",
        "schema": "string",
        "required": false,
        "description": "Find ngrams containing the given token(s). Use comma or space as token separators; the order of tokens is irrelevant."
      },
      {
        "name": "punctuation",
        "schema": "string",
        "required": false,
        "description": "Flag specifying whether to lookup ngrams that include punctuation or not (possible values are \"true\" and \"false\"; default is \"false\")"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Option specifying whether tokens should be returned as a single string (option \"google\") or as a list of strings (option \"oup\")",
        "default": "oup"
      },
      {
        "name": "minFrequency",
        "schema": "integer",
        "required": false,
        "description": "Restrict the query to entries with frequency of at least `minFrequency`"
      },
      {
        "name": "maxFrequency",
        "schema": "integer",
        "required": false,
        "description": "Restrict the query to entries with frequency of at most `maxFrequency`"
      },
      {
        "name": "minDocumentFrequency",
        "schema": "integer",
        "required": false,
        "description": "Restrict the query to entries that appear in at least `minDocumentFrequency` documents"
      },
      {
        "name": "maxDocumentFrequency",
        "schema": "integer",
        "required": false,
        "description": "Restrict the query to entries that appera in at most `maxDocumentFrequency` documents"
      },
      {
        "name": "collate",
        "schema": "string",
        "required": false,
        "description": "collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory)."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign ('-'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "pagination - results offset",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "pagination - results limit",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for corpus ngrams."
      },
      {
        "statusCode": "400",
        "description": "Invalid option name...\n"
      },
      {
        "statusCode": "404",
        "description": "language is not in...\n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/stats/frequency/word/{source_lang}",
    "method": "getWordFrequency",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LexiStats",
    "typeScriptTag": "lexiStats",
    "description": "Retrieve the frequency of a word derived from a corpus.",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG",
        "default": "en"
      },
      {
        "name": "corpus",
        "schema": "string",
        "required": false,
        "description": "For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com",
        "default": "nmc"
      },
      {
        "name": "wordform",
        "schema": "string",
        "required": false,
        "description": "The written form of the word to look up (preserving case e.g., Books vs books)"
      },
      {
        "name": "trueCase",
        "schema": "string",
        "required": false,
        "description": "The written form of the word to look up with normalised case (Books --> books)"
      },
      {
        "name": "lemma",
        "schema": "string",
        "required": false,
        "description": "The lemma of the word to look up (e.g., Book, booked, books all have the lemma \"book\")",
        "default": "test"
      },
      {
        "name": "lexicalCategory",
        "schema": "string",
        "required": false,
        "description": "The lexical category of the word(s) to look up (e.g., noun or verb)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a frequency"
      },
      {
        "statusCode": "400",
        "description": "You need to specify at least one option. Try one of 'wordform, lemma, trueCase, lexicalCategory'.\n"
      },
      {
        "statusCode": "404",
        "description": "language is not in...\n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  },
  {
    "url": "/stats/frequency/words/{source_lang}",
    "method": "getWordFrequencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LexiStats",
    "typeScriptTag": "lexiStats",
    "description": "Retrieve a list of frequencies of a word/words derived from a corpus.",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code",
        "example": "SOURCE_LANG",
        "default": "en"
      },
      {
        "name": "corpus",
        "schema": "string",
        "required": false,
        "description": "For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com",
        "default": "nmc"
      },
      {
        "name": "wordform",
        "schema": "string",
        "required": false,
        "description": "The written form of the word to look up (preserving case e.g., Book vs book)"
      },
      {
        "name": "trueCase",
        "schema": "string",
        "required": false,
        "description": "The written form of the word to look up with normalised case (Books --> books)"
      },
      {
        "name": "lemma",
        "schema": "string",
        "required": false,
        "description": "The lemma of the word to look up (e.g., Book, booked, books all have the lemma \"book\")",
        "default": "test"
      },
      {
        "name": "lexicalCategory",
        "schema": "string",
        "required": false,
        "description": "The lexical category of the word(s) to look up (e.g., adjective or noun)"
      },
      {
        "name": "grammaticalFeatures",
        "schema": "string",
        "required": false,
        "description": "The grammatical features of the word(s) to look up entered as a list of k:v (e.g., degree_type:comparative)"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign ('-'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)"
      },
      {
        "name": "collate",
        "schema": "string",
        "required": false,
        "description": "collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory)."
      },
      {
        "name": "minFrequency",
        "schema": "integer",
        "required": false,
        "description": "Restrict the query to entries with frequency of at least `minFrequency`"
      },
      {
        "name": "maxFrequency",
        "schema": "integer",
        "required": false,
        "description": "Restrict the query to entries with frequency of at most `maxFrequency`"
      },
      {
        "name": "minNormalizedFrequency",
        "schema": "number",
        "required": false,
        "description": "Restrict the query to entries with frequency of at least `minNormalizedFrequency`"
      },
      {
        "name": "maxNormalizedFrequency",
        "schema": "number",
        "required": false,
        "description": "Restrict the query to entries with frequency of at most `maxNormalizedFrequency`"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "pagination - results offset",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "pagination - results limit",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a list of frequencies per wordform-trueCase-lemma-lexicalCategory entry."
      },
      {
        "statusCode": "400",
        "description": "Invalid option name...; Option ... must have a value.; The option 'minFrequency' has to have an non-negative integer parameter.; The option 'maxFrequency' has to have an non-negative integer parameter.; The option 'limit' has to have an non-negative integer parameter.; The option 'offset' has to have an non-negative integer parameter."
      },
      {
        "statusCode": "404",
        "description": "language is not in...\n"
      },
      {
        "statusCode": "500",
        "description": "Internal Error. An error occurred while processing the data.\n"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Oxford Dictionaries"
      apiBaseUrl="https://od-api-demo.oxforddictionaries.com:443/api/v1"
      apiVersion="1.11.0"
      endpoints={26}
      sdkMethods={26}
      schemas={36}
      parameters={149}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oxford-dictionaries/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/oxford-dictionaries/openapi.yaml"
      developerDocumentation="developer.oxforddictionaries.com/"
    />
  );
}
  