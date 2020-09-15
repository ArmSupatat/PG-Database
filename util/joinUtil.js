// const Client = use("App/Models/Client")
// const clientValidator = require("../service/ClientValidator")

class JoinUtil {

    _withReference (instance, references) {
        if(references){
            const extractedReferences = references.split(",")
            instance.with(extractedReferences)
        }
        return instance
    }

    _validation(joinValidator){
        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }
    }

    constructor(JoinModel){
        this._Join = JoinModel
    }

    getAll (references){
        const join = this._Join.query()
        return this._withReference(join,references).fetch()
    }

    getById(joinId, references){
        this._validation(joinId)
        const join = this._Join
            .query()
            .where('join_id',joinId)
            return this._withReference(join,references)
                .fetch()
                .then(response => response.first())
    }
      async create (joinInstance, references) {
          const { join_id } = await this._Join.create(joinInstance.body)
          const join = this._Join
            .query()
            .where('join_id', join_id)
          return this._withReference(join, references)
            .fetch()
            .then(response => response.first())
        }
        
        async update(joinInstance,references){
          const { id } = joinInstance.params
          let joins = await this._Join.find(id)
          if(!joins){
              return {status : 500 ,error : `Not Found ${id}` , data : undefined};
          }
          joins.merge(joinInstance.body)
          await joins.save();
      
          joins = this._Join.query().where({join_id : id})
          return this._withReference(joins,references).fetch().then(response => response.first())
      }
        async deleteById(joinInstance){
          const { id } = joinInstance.params
          const joins = await this._Join.find(id)
          if(!joins){
              return {status : 500 ,error : `Not Found ${id}` , data : undefined};
          }
          joins.delete()
          await joins.save();
          return {status : 200 ,error : undefined , data : 'success'};
      } 
}

module.exports = JoinUtil