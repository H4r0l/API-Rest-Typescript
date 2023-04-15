import ItemModel from "../models/item"
import { Car } from "../interfaces/car.interface";


const findItem = async (id: string) => {
    const response = await ItemModel.findOne({_id:id});
    return response
}

const findItems = async () => {
    const response = await ItemModel.find({});
    return response
}

const insertItem = async (item: Car) => {
    const responseItem = await ItemModel.create(item);
    return responseItem;
}

const patchItem = async (id:string, data:Car ) => {
    const responseItem = await ItemModel.findByIdAndUpdate({_id:id}, data, {new:true});
    return responseItem
}

const removeItem = async (id: string) => { 
    const responseItem = await ItemModel.findByIdAndDelete({_id:id});
    return responseItem
}

export { findItems, findItem, insertItem, patchItem, removeItem };