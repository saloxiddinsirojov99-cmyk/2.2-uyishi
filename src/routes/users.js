import express from "express";
import validation from "../middleware/validations.js";
import userController from "../controllers/userController.js";

const router = express.Router();

router.post("/register", validation, userController.register);

export default router;
