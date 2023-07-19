import { mascotasDaoMoongose } from "../dao/mongoose/mascotasDaoMongoose.js";
import { GenericRepository } from "./GenericRepository.js";

export const mascotasRepository = new GenericRepository(mascotasDaoMoongose)