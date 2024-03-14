import OpenAI from "openai";
import Instructor from "@instructor-ai/instructor";
import { z } from "zod";
import path from "path";
import { dbFolder } from "../scripts/util";
import * as fs from "fs";

const categoryCacheJsonPath = path.join(dbFolder, "category-cache.json");

const categoriesToMapTo = {
  "Artificial Intelligence": [
    "AI Tools",
    "Text-to-Speech",
    "Translation",
    "Image Recognition",
    "Speech Recognition",
    "Natural Language Processing",
    "Video Generation",
    "Voice Generation",
  ],
  "Business Intelligence": ["Analytics", "Dashboards", "Reviews"],
  Commerce: [
    "Accounting",
    "eCommerce",
    "Fundraising",
    "Payment Processing",
    "Proposal & Invoice Management",
  ],
  Communication: [
    "Call Tracking",
    "Email",
    "Fax",
    "Notifications",
    "Phone & SMS",
    "Team Chat",
    "Team Collaboration",
    "Video Conferencing",
  ],
  "Content & Files": [
    "Documents",
    "File Management & Storage",
    "Images & Design",
    "Notes",
    "Transcription",
    "Video & Audio",
  ],
  "Human Resources": ["HR Talent & Recruitment"],
  "Internet of Things": ["Devices", "Printing"],
  "IT Operations": [
    "Databases",
    "Developer Tools",
    "Online Courses",
    "Security & Identity Tools",
    "Server Monitoring",
  ],
  "Lifestyle & Entertainment": ["Fitness", "Gaming", "News & Lifestyle"],
  Marketing: [
    "Ads & Conversion",
    "Drip Emails",
    "Email Newsletters",
    "Event Management",
    "Marketing Automation",
    "Social Media Accounts",
    "Social Media Marketing",
    "Transactional Email",
    "URL Shortener",
    "Webinars",
  ],
  Productivity: [
    "Bookmark Managers",
    "Calendar",
    "Product Management",
    "Project Management",
    "Spreadsheets",
    "Task Management",
    "Time Tracking Software",
  ],
  "Sales & CRM": [
    "Contact Management",
    "CRM (Customer Relationship Management)",
    "Forms & Surveys",
    "Scheduling & Booking",
    "Signatures",
  ],
  Support: ["Customer Appreciation", "Customer Support"],
  "Website & App Building": ["App Builder", "Website Builders"],
};

const allSubcategories = Object.values(categoriesToMapTo).flatMap(
  (subCategories) => subCategories
);
const subCategoryEnumSchema = z.enum(["Other", ...allSubcategories]);

const categoryResultSchema = z.object({
  category: subCategoryEnumSchema.describe("The category assigned to an API"),
});

type CategoryResult = z.infer<typeof categoryResultSchema>;

type GroupedApi = {
  company: string;
  service?: string;
  category: string;
};

export async function assignCategoryToApi({
  api,
}: {
  api: API;
}): Promise<GroupedApi> {
  for (let i = 0; i < 3; i++) {
    try {
      const { category } = await categorizeAPI(api);
      return {
        company: api.company,
        service: api.service,
        category,
      };
    } catch (error) {
      console.error(`Attempt ${i + 1} failed`);
    }
  }
  throw new Error(`Failed to categorize API ${api.company} ${api.service}`);
}

type CategoryCache = {
  // Key is `company-service` or `company`
  apis: Record<string, string>;
};

function getCategoryCache(): CategoryCache {
  return JSON.parse(fs.readFileSync(categoryCacheJsonPath, "utf-8"));
}

function saveCategoryResultToCache(api: API, category: string) {
  // if file doesn't exist, create it
  if (!fs.existsSync(categoryCacheJsonPath)) {
    fs.writeFileSync(
      categoryCacheJsonPath,
      JSON.stringify({ apis: {} }, null, 2)
    );
  }
  const cache = getCategoryCache();
  cache.apis[`${api.company}-${api.service}`] = category;
  fs.writeFileSync(categoryCacheJsonPath, JSON.stringify(cache, null, 2));
}

function getCategoryResultFromCache(api: API): string | undefined {
  if (!fs.existsSync(categoryCacheJsonPath)) {
    return undefined;
  }
  const cache = getCategoryCache();
  return cache.apis[`${api.company}-${api.service}`];
}

async function categorizeAPI(api: API): Promise<CategoryResult> {
  // if cached, return
  const cachedResult = getCategoryResultFromCache(api);
  if (cachedResult) {
    return { category: cachedResult };
  }

  const openai = new OpenAI({ apiKey: process.env["OPENAI_API_KEY"] });
  const client = Instructor({
    client: openai,
    mode: "FUNCTIONS",
  });

  const response = await client.chat.completions.create({
    messages: [
      {
        role: "user",
        content: generatePrompt(api),
      },
    ],
    model: "gpt-3.5-turbo",
    response_model: {
      schema: categoryResultSchema,
      name: "GroupedCategories",
    },
  });
  console.log(
    `🧠 Categorized ${api.company}${
      api.service ? `[${api.service}]` : ""
    } using AI: ${response.category}`
  );

  // cache result
  saveCategoryResultToCache(api, response.category);
  return response;
}

type API = {
  company: string;
  service?: string;
  metaDescription: string;
  keywords: string[];
};

function generatePrompt(api: API) {
  const prompt = `You are world-class at categorizing APIs. You are given the following categories: ${JSON.stringify(
    allSubcategories
  )}. Given company name, service name (if provided), description of the company, and keywords you are to categorize the APIs into one of the categories.

  Please assign a category to the following API: ${JSON.stringify(api)}`;
  return prompt;
}
