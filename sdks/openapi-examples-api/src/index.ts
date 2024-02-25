import { Hono } from "hono";
import db from "../db/db.json";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/companies", (c) => {
  return c.json(db.companies);
});

export default app;
