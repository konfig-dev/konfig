import { Humanloop } from "humanloop";

const humanloop = new Humanloop({
  // Defining the base path is optional and defaults to https://api.humanloop.com/v4
  // basePath: "https://api.humanloop.com/v4",
  // Use native Fetch API instead of axios
  // useFetch: true,
  openaiApiKey: "openaiApiKey",
  anthropicApiKey: "anthropicApiKey",
  apiKey: "API_KEY",
});

const chatResponse = await humanloop.chat({
  project: "sdk-example",
  messages: [
    {
      role: "user",
      content: "Explain asynchronous programming.",
    },
  ],
  model_config: {
    model: "gpt-3.5-turbo",
    max_tokens: -1,
    temperature: 0.7,
    chat_template: [
      {
        role: "system",
        content:
          "You are a helpful assistant who replies in the style of {{persona}}.",
      },
    ],
  },
  inputs: {
    persona: "the pirate Blackbeard",
  },
  stream: false,
});

console.log(chatResponse);

const completeResponse = await humanloop.complete({
  project: "sdk-example",
  inputs: {
    text: "Llamas that are well-socialized and trained to halter and lead after weaning and are very friendly and pleasant to be around. They are extremely curious and most will approach people easily. However, llamas that are bottle-fed or over-socialized and over-handled as youth will become extremely difficult to handle when mature, when they will begin to treat humans as they treat each other, which is characterized by bouts of spitting, kicking and neck wrestling.[33]",
  },
  model_config: {
    model: "gpt-3.5-turbo",
    max_tokens: -1,
    temperature: 0.7,
    prompt_template:
      "Summarize this for a second-grade student:\n\nText:\n{{text}}\n\nSummary:\n",
  },
  stream: false,
});

console.log(completeResponse);

const feedbackResponse = await humanloop.feedback({
  type: "rating",
  value: "good",
  data_id: "data_[...]",
  user: "user@example.com",
});

console.log(feedbackResponse);

const logResponse = await humanloop.log({
  project: "sdk-example",
  inputs: {
    text: "Llamas that are well-socialized and trained to halter and lead after weaning and are very friendly and pleasant to be around. They are extremely curious and most will approach people easily. However, llamas that are bottle-fed or over-socialized and over-handled as youth will become extremely difficult to handle when mature, when they will begin to treat humans as they treat each other, which is characterized by bouts of spitting, kicking and neck wrestling.[33]",
  },
  output:
    "Llamas can be friendly and curious if they are trained to be around people, but if they are treated too much like pets when they are young, they can become difficult to handle when they grow up. This means they might spit, kick, and wrestle with their necks.",
  source: "sdk",
  config: {
    model: "gpt-3.5-turbo",
    max_tokens: -1,
    temperature: 0.7,
    prompt_template:
      "Summarize this for a second-grade student:\n\nText:\n{{text}}\n\nSummary:\n",
    type: "model",
  },
});

console.log(logResponse);
