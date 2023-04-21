import { Router } from "express";
import { getOrders } from "../controllers/order.controller";
import { checkJwt } from "../middleware/session";

/*Private route used for logged in Users*/ 

const router = Router();

router
    .get('/', checkJwt, getOrders)

export { router };