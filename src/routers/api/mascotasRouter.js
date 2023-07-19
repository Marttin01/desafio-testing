import { Router } from "express";
import { handleGet, handlePost, handlePut } from "../../controllers/api/mascotasController.js";

export const mascotasRouter = Router()

// mascotasRouter.get()

mascotasRouter.get('/:mid', handleGet)

mascotasRouter.post('/', handlePost)

mascotasRouter.put('/:id', handlePut)

mascotasRouter.delete('/:did')