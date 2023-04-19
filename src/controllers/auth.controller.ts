import { Request, Response } from "express";
import {
    registerNew,
    loginUser
} from "../services/authservice";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async (req: Request, res: Response) => {
    try {
        const response = await registerNew(req.body);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_REGISTER", null, 401);
    }
}

const loginCtrl = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const responseUser = await loginUser({ email, password });
        res.send(responseUser);
    } catch (e) {
        handleHttp(res, "ERROR_LOGIN", null, 403);
    }
}

export { registerCtrl, loginCtrl }