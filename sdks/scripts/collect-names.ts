import OpenAI from "openai";
import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

const prompt = `I am going to give you a filepath.
The first directory in the filepath is a company name.
After that directory, there may be a service name directory, and a version number or date directory.
I want back the cleaned and extracted company name. Ignore any service names, dates, or version numbers.
Ignore any dates or version numbers.
Here are some examples:
If I gave "adyen.com/CheckoutService/52", you would respond with "ayden".
If I gave "amazonaws.com/cloudfront/2020-05-31", you would respond with "amazonaws".
If I gave "googleapis.com/container/v1beta1", you would respond with "google".
If I gave "twilio.com/twilio_pricing_v2/1.52.0", you would respond with "twilio".
Respond with only the answer and nothing else.
Do not respond with a prefix or suffix like "The company name extracted is" or anything like that.

Okay, here is the filepath: {{path}}`;

async function main() {
  const apiDirectory = path.join(
    path.dirname(__dirname),
    "openapi-directory",
    "APIs"
  );
  const dirs = glob
    .sync(path.join(apiDirectory, "**", "*(openapi|swagger).yaml"))
    .map((dir) => path.dirname(path.relative(apiDirectory, dir)));

  for (const dir of dirs) {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt.replace("{{path}}", dir) }],
      model: "gpt-3.5-turbo",
    });
    console.log(dir + " --> " + chatCompletion.choices[0].message.content);
    console.log("--------------------------------------------------");
  }
}

main();
