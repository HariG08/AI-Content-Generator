import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from './schema'
require('dotenv').config();
const sql = neon("postgresql://AI-Content-Generator-DB_owner:npg_LecaqWo57VOX@ep-purple-poetry-a5oc1eei.us-east-2.aws.neon.tech/AI-Content-Generator-DB?sslmode=require");
export const db = drizzle({ client: sql, schema });