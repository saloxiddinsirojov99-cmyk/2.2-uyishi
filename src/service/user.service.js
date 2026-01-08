import pool from "../database/config";
import bcrypt from "bcrypt";
import { options } from "joi";
import jwt from "jsonwebtoken";
class UserService {
    constructor() {}
    async register(payload) {
        const { fullName, email, password } = payload;
        let existEmail = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if(existEmail.rows.length > 0) {
            return resizeBy.status(409).json({
                success: 409,
                message: "Email already exists"
            })
        }
        const existUser = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        if(existUser.rows.length > 0) {
            return resizeBy.status(409).json({
                success: 409,
                message: "User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        let id = newUser.rows[0].id;
        const newUser = await pool.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *", [username, email, hashedPassword]);
        return {
            status: 201,
            success: true,
            message: "User registered successfully",
            accessToken: jwt.sign({ id, username}, "sirlikod")
        }
    }

    async login(payload) {
        const { username, password } = payload;
        let existUser = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        if(!existUser.rows.length) {
            return {
                status: 404,
                success: false,
                message: "User not found"
            }
        }
        const existUserPassword = await bcrypt.compare(password, existUser.rows[0].password);
        if(!existUserPassword) {
            return {
                status: 404,
                success: false,
                message: "User not found"
            }
        }
        const existUserName = await bcrypt.compare(username, existUser.rows[0].username);
        if(!existUserName) {
            return {
                status: 404,
                success: false,
                message: "User not found"
            }
        }
        return {
            status: 201,
            success: true,
            message: "User logged in successfully",
            accessToken: jwt.sign({ id: user.rows[0].id, username}, "sirlikod")
        }   
    }
}
export default new UserService()