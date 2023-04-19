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
        handleHttp(res, "ERROR_REGISTER");
        console.log(e)
    }
}

const loginCtrl = async (req: Request, res: Response ) => {
    
}

export { registerCtrl, loginCtrl }