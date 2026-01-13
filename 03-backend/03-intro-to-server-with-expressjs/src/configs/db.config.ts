import { Pool } from "pg";

// DATABASE_URL=postgresql://postgres.otzyuzvtrosoqurnmjsd:[YOUR-PASSWORD]@aws-1-ap-south-1.pooler.supabase.com:5432/postgres
const pool = new Pool({
  user: "postgres.otzyuzvtrosoqurnmjsd",
  host: "aws-1-ap-south-1.pooler.supabase.com",
  database: "postgres",
  password: "purwadhika123",
  port: 5432,
});

export default pool;
