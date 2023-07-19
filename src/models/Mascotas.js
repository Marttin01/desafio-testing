import { randomUUID } from 'node:crypto' 

export class Mascotas {
    #nombre
    #edad
    #raza
    #id

    constructor({nombre,edad,raza}){
        this.#nombre = nombre,
        this.#edad = edad,
        this.#raza = raza,
        this.#id = randomUUID()
    }

    dto(){
        return {
            nombre:this.#nombre,
            edad:this.#edad,
            raza:this.#raza,
            id:this.#id     
        }
    }
}