import OpenAI from 'openai'
import {
  getOpenAiRedisCache,
  setOpenAiRedisCache,
} from './github-api-redis-cache'
import { SHA256 } from 'crypto-js'

/**
 * Extract a description to be used as a <meta> and og:description tag. Make
 * sure to keep it under 160 characters and longer than 110 characters. Try to
 * find a stopping point that is not in the middle of a sentence. But make sure
 * to include the last period.
 * @param markdown - markdown string
 * @returns meta description
 */
export async function extractMetaDescription({
  markdown,
}: {
  markdown: string
}): Promise<string> {
  const prompt = await generatePrompt({ markdown })
  const key = hashPrompt({ prompt })

  const getCachedMetaDescription = await getOpenAiRedisCache({
    namespace: 'meta-description',
    key,
  })

  if (getCachedMetaDescription !== null) {
    return getCachedMetaDescription
  }

  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is required')
  }
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  // Make a call to OpenAI to generate a meta description. To ensure consistency,
  // set the temperature to 0.
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-0125',
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0,
  })
  const metaDescription = response.choices[0].message.content

  if (metaDescription === null) {
    throw new Error('OpenAI did not return a meta description')
  }

  // Generate a key (hash) from the prompt and store the meta description in
  // Redis.

  await setOpenAiRedisCache({
    namespace: 'meta-description',
    key,
    value: metaDescription,
  })

  return metaDescription
}

/**
 * Generate a hash from the prompt to use as a key in Redis
 */
function hashPrompt({ prompt }: { prompt: string }) {
  return SHA256(prompt).toString()
}

async function generatePrompt({
  markdown,
}: {
  markdown: string
}): Promise<string> {
  return `Help me generate a good <meta> description for my website's page. The description MUST be between 110 and 160 characters. ENSURE the generated description is optimized for SEO purposes. Here are some rules for generating a good meta description:

  Relevant and Descriptive: The meta description should accurately summarize the page content, providing a clear understanding of what the user can expect to find on the page.

  Unique for Each Page: Each page on your website should have a unique meta description that reflects the specific content of that page. Avoid using the same meta description across multiple pages.

  Optimized with Keywords: While not directly impacting rankings, including relevant keywords in the meta description can make it more appealing to users when the search terms are highlighted in the search results. However, it's essential to use keywords naturally and avoid keyword stuffing.

  Compelling and Action-Oriented: Use active voice and action-oriented language to encourage users to click through. Phrases like "Learn more," "Get started," or "Discover" can be effective.

  Appropriate Length: While there's no perfect length, generally keeping your meta description between 150-160 characters ensures that the entire description is likely to be displayed without being cut off in search results. However, it's worth noting that Google might not always show the exact meta description in search results and may choose to pull other content from the page if it deems it more relevant to the user's query.

  Structured Content: If applicable, include structured data to help search engines understand the context of the content better. While this isn't part of the meta description itself, it complements the meta description in improving the page's visibility and relevance.

  Avoid Duplication: Ensure that your meta description is not a duplicate of any other on your site or too similar to others. Unique descriptions help differentiate pages and improve the user experience.

  Reflect Brand Voice: The meta description should align with your brand's voice and tone, helping to establish consistency across your site.

  The markdown content of the page is:

  "${markdown}"`
}
