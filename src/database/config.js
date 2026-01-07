import {config} from "dotenv";
import { Pool } from "pg";
config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

async function config_db() {
    try {
        await pool.connect();
        console.log("✅Database connected");
    } catch (error) {
        console.log("❌Database connection error", error);
    }
}connect_db();
export default pool;
