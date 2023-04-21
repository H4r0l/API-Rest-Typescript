import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/requestExt.interface";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const userJwt = req.headers.authorization || '';
        const jwt = userJwt.split(' ')[1];
        const verified = verifyToken(`${jwt}`) as { id: string };
        if (!verified) {
            res.status(401);
            res.send({ message: 'Unauthorized' });
        } else {
            req.user = verified;
            next();
        };
    } catch (e: any) {
        res.status(400)
        res.send({ error: e.message, data: "INVALID_SESSION" })
    }
}

export { checkJwt }