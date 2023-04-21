import { Router } from "express";
import { getFile } from "../controllers/upload.controller";
import Storagemw from "../middleware/file";
import { checkJwt } from "../middleware/session";

const router = Router();

router
    .post('/', checkJwt, Storagemw.single('newfile'), getFile)

export { router };