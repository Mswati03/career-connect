import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import * as dotenv from 'dotenv';

const myEnv = dotenv.config({ path: '.env.local' }); 
const pool = new Pool({
  connectionString: myEnv.parsed?.NEXT_PUBLIC_DATABASE_URL!,
});

export const db = drizzle(pool, { schema, logger: true });

