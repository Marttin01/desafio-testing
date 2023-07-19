import mongoose from "mongoose";
import { DaoMongoose } from "./DaoMongoose.js";

const mascotaSchema = new mongoose.Schema({
    nombre:String,
    edad:Number,
    raza:String,
    id:String
},{versionKey:false})

const mascotaModel = mongoose.model('mascotas',mascotaSchema)

export const mascotasDaoMoongose = new DaoMongoose(mascotaModel)
