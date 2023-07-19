import { Router } from "express";
import { mascotasRouter } from "./mascotasRouter.js";

export const apiRouter = Router()

apiRouter.use('/mascotas', mascotasRouter)