import { Request, Response } from "express";
import {
    registerNewUser,
    loginUser
} from "../services/authservice";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async (req: Request, res: Response) => {
    try {
        const response = await registerNewUser(req.body);
    } catch (e) {
        handleHttp(res, "ERROR_REGISTER");
    }
}

const loginCtrl = async (req: Request, res: Response ) => {
    
}

export { registerCtrl, loginCtrl }