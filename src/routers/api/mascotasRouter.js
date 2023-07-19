import { Router } from "express";
import { handleDelete, handleGet, handleGetById, handlePost, handlePut } from "../../controllers/api/mascotasController.js";

export const mascotasRouter = Router()

// mascotasRouter.get()

mascotasRouter.get('/:mid', handleGetById)

mascotasRouter.get('/', handleGet)

mascotasRouter.post('/', handlePost)

mascotasRouter.put('/:id', handlePut)

mascotasRouter.delete('/:did', handleDelete)