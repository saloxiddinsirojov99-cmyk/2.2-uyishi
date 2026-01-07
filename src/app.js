import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/users.js";

config();

const app = express();
app.use(express.json());
app.use("/api", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
