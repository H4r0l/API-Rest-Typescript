import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/requestExt.interface";



const getOrders = async (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Session verified succesfully",
            user: req.user
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_ORDERS", null, 404);
    }
}

export { getOrders }