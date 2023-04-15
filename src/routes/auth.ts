import { Request, Response, Router } from "express";
import {
    registerCtrl,
    loginCtrl
} from "../controllers/auth.controller";

const router = Router();

router
    .post("/register", registerCtrl)
    .post("/login", loginCtrl);

export { router };
