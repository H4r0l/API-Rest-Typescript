import { Router } from "express";
import { getFile } from "../controllers/upload.controller";
import Storagemw from "../middleware/file";

const router = Router();

router
    .post('/', Storagemw.single('newfile'), getFile)

export { router };