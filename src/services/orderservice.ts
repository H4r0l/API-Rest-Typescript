// import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const getOrders = async () => {
    const response = await ItemModel.find();
    return response;
}

export { getOrders }