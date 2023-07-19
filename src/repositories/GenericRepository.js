export class GenericRepository {
    #dao
    constructor(dao){
        this.#dao = dao
    }

    create(criteria){
        return this.#dao.create(criteria)
    }

    readOne(criteria){
        return this.#dao.readOne(criteria)
    }

    readMany(){
        return this.#dao.readMany()
    }

    updateOne(criteria,newCriteria){
        return this.#dao.updateOne(criteria,newCriteria)
    }

    deleteOne(criteria){
        return this.#dao.deleteOne(criteria)
    }
}