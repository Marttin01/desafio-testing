function toPojo(object){
    return JSON.parse(
        JSON.stringify(
            object
        )
    )
}

export class DaoMongoose {
    #model
    constructor(model){
        this.#model = model
    }

    async create(element){
        return toPojo(await this.#model.create(element))
    }

    async readOne(criteria){
        const result = await this.#model.findOne(criteria).lean()
        if(!result) throw new Error('Not found')
        return result
    }

    async readMany(){
        return await this.#model.find().lean()
    }

    async updateOne(criteria,newCriteria){
        const modificado = await this.#model.updateOne(criteria,newCriteria)
        if(!modificado) throw new Error("Not found")
        return toPojo(modificado)
    }

    async deleteOne(criteria){
        const borrado = await this.#model.deleteOne(criteria)
        if(!borrado) throw new Error("Notr found")
        return toPojo(borrado)
    }
}