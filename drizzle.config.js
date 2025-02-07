/** @type {import("drizzle-kit").Config} */
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://AI-Content-Generator-DB_owner:npg_LecaqWo57VOX@ep-purple-poetry-a5oc1eei.us-east-2.aws.neon.tech/AI-Content-Generator-DB?sslmode=require",
  },
});
