import { Request, Response, Router } from 'express'
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/item.controller'
import { logMiddleware } from '../middleware/log'

const router = Router()

router
    .get('/', getItems)

    .get('/:id', logMiddleware, getItem)

    .post('/', postItem)

    .put('/:id', updateItem)
    
    .delete('/:id', deleteItem)


export { router }