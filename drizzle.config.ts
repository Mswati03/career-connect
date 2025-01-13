import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

const myEnv = dotenv.config({ path: '.env.local' }); 

export default defineConfig({
    out: './drizzle',
    schema: './db/schema.ts',
    dialect: 'postgresql',
    migrations: {
      table: "migrations",
      schema: "./scripts",
    },
  dbCredentials: {
    url: myEnv.parsed?.NEXT_PUBLIC_DATABASE_URL!,
  },
});