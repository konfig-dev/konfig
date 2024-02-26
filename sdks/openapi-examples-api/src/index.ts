import db from "../db/db.json";
import { OpenAPIHono, createRoute } from "@hono/zod-openapi";
import { companiesSchema } from "../scripts/util/schemas";

const app = new OpenAPIHono();

const statusCheckRoute = createRoute({
  method: "get",
  path: "/",
  operationId: "Status_check",
  tags: ["Status"],
  responses: {
    200: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: "string",
                enum: ["OK"],
              },
            },
          },
        },
      },
      description: "The API is up and running.",
    },
  },
});

app.openapi(statusCheckRoute, (c) => {
  return c.json({ status: "OK" });
});

const companiesListRoute = createRoute({
  method: "get",
  path: "/companies",
  operationId: "Companies_list",
  tags: ["Companies"],
  responses: {
    200: {
      content: {
        "application/json": {
          schema: companiesSchema,
        },
      },
      description: "Fetch information about all the companies in the database.",
    },
  },
});

app.openapi(companiesListRoute, (c) => {
  return c.json(db.companies);
});

// The OpenAPI documentation will be available at /doc
app.doc("/openapi", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "OpenAPI Examples API",
  },
  tags: [
    {
      name: "Status",
    },
    {
      name: "Companies",
    },
  ],
  servers: [
    {
      url: "https://api.openapi-examples.com",
    },
  ],
});

export default app;
