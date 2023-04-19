import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  findItems,
  findItem,
  insertItem,
  patchItem,
  removeItem,
} from "../services/itemservice";

const getItem = async (req: Request, res: Response) => {
  try {
    const response = await findItem(req.params.id);
    const data = response ? response : {"NOT_FOUND":true};
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM", null, 404);
  }
};
const getItems = async (req: Request, res: Response) => {
  try {
    const response = await findItems();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", null, 404);
  }
};
const updateItem = async (req: Request, res: Response) => {
  try {
    const response = await patchItem(req.params.id, req.body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM" , null, 409);
  }
};
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertItem(body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", null, 409);
  }
};
const deleteItem = (req: Request, res: Response) => {
  try {
    const response = removeItem(req.params.id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM" , null, 400);
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
