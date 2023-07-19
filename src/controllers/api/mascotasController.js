import { Mascotas } from "../../models/Mascotas.js"
import { mascotasRepository } from "../../repositories/mascotasRepository.js"

export async function handlePost (req,res,next){
    try {
        const mascota = new Mascotas(req.body)
        const creado = await mascotasRepository.create(mascota.dto()) 
        
        res.json({status:"correct", payload:creado})
    } catch (error) {
        console.log(error)
    }
}

export async function handleGet (req,res,next){
    try {
        if(req.params.mid){
            const mascota = await mascotasRepository.readOne({id:req.params.mid})

            res.json({status:"correct", payload:mascota})
        }else{
            const mascotas = await mascotasRepository.readMany()
    
            res.json({status:"correct", payload:mascotas})
        }
    } catch (error) {
        console.log(error)
    }
}

export async function handlePut (req,res,next){
    try {
        const mascota = await mascotasRepository.updateOne(req.params.id,req.body)

        res.json({status:"correct", payload: mascota})
    } catch (error) {
        console.log(error)
    }
}

export async function handleDelete (req,res,next){
    try {
        const mascota = await mascotasRepository.deleteOne(req.params.did)
        
        res.json({status:"correct", payload: mascota})
    } catch (error) {
        console.log(error)
    }
}

