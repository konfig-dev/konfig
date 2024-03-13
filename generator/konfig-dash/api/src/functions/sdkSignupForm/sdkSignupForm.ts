import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import { z } from 'zod'
import { Client } from '@notionhq/client'
import { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, context: Context) => {
  logger.info('Invoked sdkSignupForm function')

  const origin = event.headers.origin || event.headers.Origin
  const allowedOrigins = ['http://localhost:3000', 'https://konfigthis.com']
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':
      typeof origin !== 'undefined' && allowedOrigins.includes(origin)
        ? origin
        : '',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Handle OPTIONS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
    }
  }

  if (event.body === null) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: 'Missing body',
      }),
    }
  }

  const body = sdkSignupFormSchema.parse(JSON.parse(event.body))

  const page = await createPageInDatabase(body)

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(page),
  }
}

async function createPageInDatabase({
  email,
  company,
  service,
  language,
}: SdkSignupForm) {
  const properties: CreatePageParameters['properties'] = {
    [databaseProperties.Email.name]: {
      email: email,
    },
    [databaseProperties.Company.name]: {
      rich_text: [
        {
          type: 'text',
          text: {
            content: company,
          },
        },
      ],
    },
    [databaseProperties.Name.name]: {
      title: [
        {
          type: 'text',
          text: {
            content: 'New SDK Signup',
          },
        },
      ],
    },
  }
  if (language !== undefined) {
    properties[databaseProperties.Language.name] = {
      select: {
        name: language,
      },
    }
  }
  if (service !== undefined) {
    properties[databaseProperties.Service.name] = {
      rich_text: [
        {
          type: 'text',
          text: {
            content: service,
          },
        },
      ],
    }
  }

  const parent = DATABASE_ID

  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  })

  const page = await notion.pages.create({
    parent: {
      database_id: parent,
    },
    properties,
  })

  return page
}

const DATABASE_ID = 'a1637383be734577b5241af543670d35'

const databaseProperties = {
  Email: {
    id: 'MG%7DQ',
    name: 'Email',
    type: 'email',
    email: {},
  },
  Company: {
    id: 'OnKW',
    name: 'Company',
    type: 'rich_text',
    rich_text: {},
  },
  Language: {
    id: 'Qput',
    name: 'Language',
    type: 'select',
    select: {
      options: [
        {
          id: 'D{dg',
          name: 'TypeScript',
          color: 'gray',
          description: null,
        },
        {
          id: '4d9d120e-c728-4b1b-8801-2383f698e28a',
          name: 'Python',
          color: 'pink',
          description: null,
        },
      ],
    },
  },
  Service: {
    id: 'UUo%5B',
    name: 'Service',
    type: 'rich_text',
    rich_text: {},
  },
  Website: {
    id: '_PE%3E',
    name: 'Website',
    type: 'url',
    url: {},
  },
  ID: {
    id: 'p%3EeP',
    name: 'ID',
    type: 'unique_id',
    unique_id: {
      prefix: null,
    },
  },
  Name: {
    id: 'title',
    name: 'Name',
    description: '',
    type: 'title',
    title: {},
  },
} as const

const sdkSignupFormSchema = z.object({
  email: z.string(),
  company: z.string(),
  service: z.string().optional(),
  language: z.union([z.literal('TypeScript'), z.literal('Python')]).optional(),
})

type SdkSignupForm = z.infer<typeof sdkSignupFormSchema>
