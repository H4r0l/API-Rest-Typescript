import { Request, Response, Router } from 'express'
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/itemController'

const router = Router()

router
    .get('/', getItem)

    .get('/:id', getItems)

    .post('/', postItem)

    .put('/:id', updateItem)
    
    .delete('/:id', deleteItem)


export { router }