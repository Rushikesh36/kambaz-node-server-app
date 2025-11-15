import express from 'express'
import Hello from "./Hello.js";
import Lab5 from "./lab5/index.js";
import db from "./Kambaz/Database/index.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import cors from "cors";
const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL || "http://localhost:3000",
}));
app.use(express.json());
UserRoutes(app, db);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);