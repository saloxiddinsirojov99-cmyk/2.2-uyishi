import express from "express";
import validation from "../middleware/validations.js";
import userController from "../controllers/userController.js";

const router = express.Router();

router
    .post("api/register", validation, userController.register)
    .post("api/login", validation, userController.login);

export default router;
