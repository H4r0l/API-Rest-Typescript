import ItemModel from "../models/item"
import { Car } from "../interfaces/car.interface";

//Create a service that search the name of an item

const searchItem = async (id: string) => {
    const responseItem = await ItemModel.findById(id)
    return responseItem
}

const insertItem = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}

export {
    insertItem,
    searchItem
};