import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AeternityFoundationTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="aeternity-foundation-typescript-sdk"
      metaDescription={`The Aeternity Foundation's mission is to support the future of the æternity blockchain ecosystem through targeted grants, strategic partnerships, and dedicated events. The commitment to advancing blockchain technology is realized by empowering a network of developers and creators, backed by the Foundation's support and collaborative ventures.

Follow us as we highlight the achievements within the æternity ecosystem, from cutting-edge projects to the strategic alliances that broaden our horizons. Discover how the Aeternity Foundation is not just pioneering blockchain solutions but actively supporting the creativity and innovation of its community, leveraging the advanced capabilities of æternity to set new standards in the industry.`}
      company="Aeternity Foundation"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/aeternity-foundation/logo.png"
      companyKebabCase="aeternity-foundation"
      clientNameCamelCase="aeternityFoundation"
      homepage="aeternity.com/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/aeternity-foundation/favicon.png"
      // Missing contactUrl
      contactEmail="apiteam@aeternity.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/aeternity-foundation/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["blockchain","cryptocurrency"]}
      methods={[
  {
    "url": "/headers/top",
    "method": "getTopHeader",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get the top header (either key or micro block)",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/key-blocks/current",
    "method": "getCurrentKeyBlock",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get the current key block",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/key-blocks/current/hash",
    "method": "getCurrentKeyblockHash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get the hash of the current key block",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/key-blocks/current/height",
    "method": "getCurrentKeyBlockHeight",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get the height of the current key block",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/key-blocks/pending",
    "method": "getPendingKeyblock",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get the pending key block",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/key-blocks/hash/{hash}",
    "method": "getKeyBlockByHash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get a key block by hash",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash of the block - either a keyblock or a microblock",
        "example": "kh_2ikjGFZGFpE99mDtsgkGFsTCqpPpXZRNRa5Pic989FJLcJStgx"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/key-blocks/height/{height}",
    "method": "getKeyBlockByHeight",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get a key block by height",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "height",
        "schema": "integer",
        "required": true,
        "description": "The height",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/micro-blocks/hash/{hash}/header",
    "method": "getMicroBlockHeaderByHash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get a micro block header by hash",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash of the block - either a keyblock or a microblock",
        "example": "kh_2ikjGFZGFpE99mDtsgkGFsTCqpPpXZRNRa5Pic989FJLcJStgx"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/micro-blocks/hash/{hash}/transactions",
    "method": "getMicroBlockTransactionsByHash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get micro block transactions by hash",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash of the micro block",
        "example": "mh_ZCWcnCG5YF2LhQMTmZ5K5rRmGxatgc5YWxDpGNy2YBAHP6urH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/micro-blocks/hash/{hash}/transactions/index/{index}",
    "method": "getMicroBlockTransactionByHashAndIndex",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get a micro block transaction by hash and index",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash of the micro block",
        "example": "mh_ZCWcnCG5YF2LhQMTmZ5K5rRmGxatgc5YWxDpGNy2YBAHP6urH"
      },
      {
        "name": "index",
        "schema": "integer",
        "required": true,
        "description": "The index of the transaction in a block",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/micro-blocks/hash/{hash}/transactions/count",
    "method": "getMicroBlockTransactionCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get micro block transaction count by hash",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash of the micro block",
        "example": "mh_ZCWcnCG5YF2LhQMTmZ5K5rRmGxatgc5YWxDpGNy2YBAHP6urH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/generations/current",
    "method": "getCurrentGeneration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get the current generation",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/generations/hash/{hash}",
    "method": "getGenerationByHash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get a generation by hash",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash of the key block",
        "example": "kh_2ikjGFZGFpE99mDtsgkGFsTCqpPpXZRNRa5Pic989FJLcJStgx"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/generations/height/{height}",
    "method": "getGenerationByHeight",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get a generation by height",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "height",
        "schema": "integer",
        "required": true,
        "description": "The height",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{pubkey}",
    "method": "getAccountByPubkey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get an account by public key",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "The public key of the account",
        "example": "ak_dArxCkAsk1mZB1L9CX3cdz1GDN4hN84L3Q8dMLHN4v8cU85TF"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{pubkey}/height/{height}",
    "method": "getAccountByPubkeyAfterHeight",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get an account by public key after the opening key block of the generation at height",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "The public key of the account",
        "example": "ak_dArxCkAsk1mZB1L9CX3cdz1GDN4hN84L3Q8dMLHN4v8cU85TF"
      },
      {
        "name": "height",
        "schema": "integer",
        "required": true,
        "description": "The height",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{pubkey}/hash/{hash}",
    "method": "getAccountAfterBlockHash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get an account by public key after the block indicated by hash. Can be either a micro block or a keyblock hash",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "The public key of the account",
        "example": "ak_dArxCkAsk1mZB1L9CX3cdz1GDN4hN84L3Q8dMLHN4v8cU85TF"
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash of the block - either a keyblock or a microblock",
        "example": "kh_2ikjGFZGFpE99mDtsgkGFsTCqpPpXZRNRa5Pic989FJLcJStgx"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{pubkey}/transactions/pending",
    "method": "getPendingAccountTransactionsByPubkey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get pending account transactions by public key",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "The public key of the account",
        "example": "ak_dArxCkAsk1mZB1L9CX3cdz1GDN4hN84L3Q8dMLHN4v8cU85TF"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{pubkey}/next-nonce",
    "method": "getNextNonce",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get an account's next nonce; This is computed according to whatever is the current account nonce and what transactions are currently present in the transaction pool",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "The public key of the account",
        "example": "ak_dArxCkAsk1mZB1L9CX3cdz1GDN4hN84L3Q8dMLHN4v8cU85TF"
      },
      {
        "name": "strategy",
        "schema": "string",
        "required": false,
        "description": "What strategy to use in order to determine the next nonce: shall it check for continuity or return the largest nonce seen + 1. If you choose strategy max, then the greatest nonce seen in the account or currently in the transaction pool is incremented with 1 and returned. If you choose the strategy continuity, then transactions in the mempool are checked if there are gaps - missing nonces that prevent transactions with greater nonces to get included.",
        "example": "max",
        "default": "max"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/dry-run",
    "method": "dryRunTransactions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Dry-run transactions on top of a given block. Supports all TXs except GAMetaTx, PayingForTx and OffchainTx. The maximum gas limit of all calls is capped. The maximum gas limit per request is a global node setting. Since DryRunCallReq object do not have a mandatory gas field, if not set a default value of 1000000 is being used instead.",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "top",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accounts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "txs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "tx_events",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactions/{hash}",
    "method": "getTransactionByHash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get a transaction by hash",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash of the transaction",
        "example": "th_2w75xjDjHEmphsHDSXrThRnPx6hSUiS7hhSRcuytJABZZ2KkdG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactions/{hash}/info",
    "method": "getTransactionInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash of the transaction",
        "example": "th_2w75xjDjHEmphsHDSXrThRnPx6hSUiS7hhSRcuytJABZZ2KkdG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactions",
    "method": "createTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Post a new transaction",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "tx",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TX"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/contracts/{pubkey}",
    "method": "getContractByPubkey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get a contract by pubkey",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "Contract pubkey to get proof for",
        "example": "ct_TV5KbBYdjw1ufKWvAtNNjUnagvRmWMMugFzLKzmLASXB5iH1E"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Contract not found"
      }
    ]
  },
  {
    "url": "/contracts/{pubkey}/code",
    "method": "getContractCodeByPubkey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get contract code by pubkey",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "Contract pubkey to get proof for",
        "example": "ct_TV5KbBYdjw1ufKWvAtNNjUnagvRmWMMugFzLKzmLASXB5iH1E"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contracts/{pubkey}/poi",
    "method": "getContractProofOfInclusion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get a proof of inclusion for a contract",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "Contract pubkey to get proof for",
        "example": "ct_TV5KbBYdjw1ufKWvAtNNjUnagvRmWMMugFzLKzmLASXB5iH1E"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/oracles/{pubkey}",
    "method": "getOracleByPubkey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get an oracle by public key",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "The public key of the oracle",
        "example": "ok_24jcHLTZQfsou7NvomRJ1hKEnjyNqbYSq2Az7DmyrAyUHPq8uR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/oracles/{pubkey}/queries",
    "method": "getOracleQueriesByPubkey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get oracle queries by public key",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "The public key of the oracle",
        "example": "ok_24jcHLTZQfsou7NvomRJ1hKEnjyNqbYSq2Az7DmyrAyUHPq8uR"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Last query id in previous page",
        "example": "oq_q3UrSagF6JfgvAwMiLa6yyEoerx6tQC87m5X8W98NrdDArNZH"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of oracle queries",
        "example": 1,
        "default": 20
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of a query: open, closed or all",
        "example": "open",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/oracles/{pubkey}/queries/{query-id}",
    "method": "getOracleQueryByPubkeyAndQueryId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get an oracle query by public key and query ID",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "The public key of the oracle",
        "example": "ok_24jcHLTZQfsou7NvomRJ1hKEnjyNqbYSq2Az7DmyrAyUHPq8uR"
      },
      {
        "name": "queryId",
        "schema": "string",
        "required": true,
        "description": "The ID of the query",
        "example": "oq_q3UrSagF6JfgvAwMiLa6yyEoerx6tQC87m5X8W98NrdDArNZH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/names/{name}",
    "method": "getNameEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get name entry from naming system",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The name key of the name entry",
        "example": "dimitar.chain"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{pubkey}",
    "method": "getChannelByPubkey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get channel by public key",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "The pubkey of the channel",
        "example": "ch_2tceSwiqxgBcPirX3VYgW3sXgQdJeHjrNWHhLWyfZL7pT4gZF4"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/peers/pubkey",
    "method": "getPeerPublicKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get peer public key",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/status",
    "method": "getNodeStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get the status of a node",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/status/chain-ends",
    "method": "getKeyblockHashes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external",
    "typeScriptTag": "external",
    "description": "Get oldest keyblock hashes counting from genesis including orphans",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/key-blocks",
    "method": "submitMinedKeyBlock",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Post a mined key block",
    "parameters": [
      {
        "name": "info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INFO"
      },
      {
        "name": "version",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HASH"
      },
      {
        "name": "height",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "prev_hash",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PREV_HASH"
      },
      {
        "name": "prev_key_hash",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PREV_KEY_HASH"
      },
      {
        "name": "state_hash",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE_HASH"
      },
      {
        "name": "miner",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MINER"
      },
      {
        "name": "beneficiary",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BENEFICIARY"
      },
      {
        "name": "target",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "pow",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "time",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/network",
    "method": "getPeerAnalytics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get detailed analytics on peers",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/contracts/create",
    "method": "createContractTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a contract_create transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "owner_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OWNER_ID"
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "vm_version",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "abi_version",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "deposit",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "gas",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "gas_price",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "call_data",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALL_DATA"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/contracts/call",
    "method": "getContractCallObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a contract_call transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "caller_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALLER_ID"
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contract_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_ID"
      },
      {
        "name": "abi_version",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "gas",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "gas_price",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "call_data",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALL_DATA"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/oracles/register",
    "method": "registerOracleTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a oracle_register transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "query_format",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY_FORMAT"
      },
      {
        "name": "response_format",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESPONSE_FORMAT"
      },
      {
        "name": "query_fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "oracle_ttl",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "abi_version",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/oracles/extend",
    "method": "getOracleExtendTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get an oracle_extend transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "oracle_ttl",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "oracle_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORACLE_ID"
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/oracles/query",
    "method": "getOracleQueryObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get an oracle_query transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "oracle_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORACLE_ID"
      },
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
      },
      {
        "name": "query_fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "query_ttl",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "response_ttl",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "sender_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENDER_ID"
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/oracles/respond",
    "method": "getOracleResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get an oracle_response transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "query_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY_ID"
      },
      {
        "name": "response",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESPONSE"
      },
      {
        "name": "response_ttl",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "oracle_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORACLE_ID"
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/names/preclaim",
    "method": "getNamePreclaimTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a name_preclaim transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "commitment_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMMITMENT_ID"
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/names/claim",
    "method": "getNameClaimTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a name_claim transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "name_salt",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "name_fee",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/names/update",
    "method": "getNameUpdateTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a name_update transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "name_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME_ID"
      },
      {
        "name": "name_ttl",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "pointers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "client_ttl",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/names/transfer",
    "method": "getNameTransferObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a name_transfer transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "name_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME_ID"
      },
      {
        "name": "recipient_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENT_ID"
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/names/revoke",
    "method": "getNameRevokeTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a name_revoke transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "name_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME_ID"
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/transactions/spend",
    "method": "getSpendTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a spend transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "recipient_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENT_ID"
      },
      {
        "name": "amount",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "sender_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENDER_ID"
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "payload",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYLOAD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/channels/create",
    "method": "createChannelObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a channel_create transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "initiator_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INITIATOR_ID"
      },
      {
        "name": "initiator_amount",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "responder_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESPONDER_ID"
      },
      {
        "name": "responder_amount",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "channel_reserve",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "lock_period",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "state_hash",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE_HASH"
      },
      {
        "name": "delegate_ids",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/channels/deposit",
    "method": "getChannelDepositTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a channel_deposit transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "from_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM_ID"
      },
      {
        "name": "amount",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "state_hash",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE_HASH"
      },
      {
        "name": "round",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/channels/withdraw",
    "method": "getChannelWithdrawal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a channel_withdrawal transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "to_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TO_ID"
      },
      {
        "name": "amount",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "state_hash",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE_HASH"
      },
      {
        "name": "round",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/channels/snapshot/solo",
    "method": "getChannelSnapshotSolo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a channel_snapshot_solo transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "from_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM_ID"
      },
      {
        "name": "payload",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYLOAD"
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/channels/set-delegates",
    "method": "setChannelDelegatesTx",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a channel_set_delegates_tx transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "from_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM_ID"
      },
      {
        "name": "initiator_delegate_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "responder_delegate_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "state_hash",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE_HASH"
      },
      {
        "name": "round",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "payload",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYLOAD"
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/channels/close/mutual",
    "method": "closeChannelMutual",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a channel_close_mutual transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "from_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM_ID"
      },
      {
        "name": "initiator_amount_final",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "responder_amount_final",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/channels/close/solo",
    "method": "channelCloseSoloTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a channel_close_solo transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "from_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM_ID"
      },
      {
        "name": "payload",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYLOAD"
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "poi",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POI"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/channels/slash",
    "method": "createChannelSlashTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a channel_slash transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "from_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM_ID"
      },
      {
        "name": "payload",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYLOAD"
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "poi",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POI"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/channels/settle",
    "method": "channelSettleTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a channel_settle transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "from_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM_ID"
      },
      {
        "name": "initiator_amount_final",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "responder_amount_final",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/channels/fsm-count",
    "method": "getActiveFsmCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get the number of currently active State Channel FSMs",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/transactions/pending",
    "method": "getPendingTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get pending transactions",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/names/commitment-id",
    "method": "computeCommitmentId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Compute commitment ID for a given salt and name",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name",
        "example": "NAME"
      },
      {
        "name": "salt",
        "schema": "integer",
        "required": true,
        "description": "Salt",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/accounts/beneficiary",
    "method": "getNodeBeneficiaryPublicKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get node's beneficiary public key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/accounts/node",
    "method": "getNodePublicKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get node's public key",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/peers",
    "method": "getNodePeers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get node Peers",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/transactions/dry-run",
    "method": "dryRunTransactionsOnBlock",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Dry-run transactions on top of a given block. Supports all TXs except GAMetaTx, PayingForTx and OffchainTx",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "top",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accounts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "txs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "tx_events",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/transactions/paying-for",
    "method": "getPayingForTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get a paying-for transaction object",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "payer_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYER_ID"
      },
      {
        "name": "fee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "nonce",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tx",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/check-tx/pool/{hash}",
    "method": "checkTxPool",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Check if a transaction in the pool can be included in a microblock or if it is blocked by something: not enough tokens, missing nonce or something else",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash of the transaction",
        "example": "th_2w75xjDjHEmphsHDSXrThRnPx6hSUiS7hhSRcuytJABZZ2KkdG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/token-supply/height/{height}",
    "method": "getTokenSupplyHeight",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get total token supply at height",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      },
      {
        "name": "height",
        "schema": "integer",
        "required": true,
        "description": "The height",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": ""
      }
    ]
  },
  {
    "url": "/debug/crash",
    "method": "simulateRequestCrash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "This is a sample URI to simulate a request crash. Shall be used for test purposes only",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/node/operator/mempool/hash/{hash}",
    "method": "removePendingTransaction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Delete a pending transaction from the mempool",
    "parameters": [
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash of the transaction",
        "example": "th_2w75xjDjHEmphsHDSXrThRnPx6hSUiS7hhSRcuytJABZZ2KkdG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/node/operator/peers/count",
    "method": "getNodePeersCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Get the number of peers in the different pools. This is to be used to catch if a node loses connectivity",
    "parameters": [
      {
        "name": "intAsString",
        "schema": "boolean",
        "required": false,
        "description": "If this flag is set to true, the response will have all integers set as strings",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Aeternity node"
      apiBaseUrl="/v3"
      apiVersion="6.13.0"
      endpoints={74}
      sdkMethods={74}
      schemas={98}
      parameters={293}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/aeternity-foundation/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/aeternity-foundation/openapi.yaml"
      developerDocumentation="api-docs.aeternity.io/"
    />
  );
}
  