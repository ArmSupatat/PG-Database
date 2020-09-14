// const Client = use("App/Models/Client")
// const clientValidator = require("../service/ClientValidator")

class ClientUtil {

    _withReference (instance, references) {
        if(references){
            const extractedReferences = references.split(",")
            instance.with(extractedReferences)
        }
        return instance
    }

    _validation(clientValidator){
        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }
    }

    constructor(ClientModel){
        this._Client = ClientModel
    }

    getAll (references){
        const client = this._Client.query()
        return this._withReference(client,references).fetch()
    }

    getById(clientId, references){
        this._validation(clientId)
        const client = this._Client
            .query()
            .where('user_id',clientId)
            return this._withReference(client,references)
                .fetch()
                .then(response => response.first())
    }
      async create (clientInstance, references) {
          const { user_id } = await this._Client.create(clientInstance.body)
          const client = this._Client
            .query()
            .where('user_id', user_id)
          return this._withReference(client, references)
            .fetch()
            .then(response => response.first())
        }
        
        async update(clientInstance,references){
          const { id } = clientInstance.params
          let clients = await this._Client.find(id)
          if(!clients){
              return {status : 500 ,error : `Not Found ${id}` , data : undefined};
          }
          clients.merge(clientInstance.body)
          await clients.save();
      
          clients = this._Client.query().where({user_id : id})
          return this._withReference(clients,references).fetch().then(response => response.first())
      }
        async deleteById(clientInstance){
          const { id } = clientInstance.params
          const clients = await this._Client.find(id)
          if(!clients){
              return {status : 500 ,error : `Not Found ${id}` , data : undefined};
          }
          clients.delete()
          await clients.save();
          return {status : 200 ,error : undefined , data : 'success'};
      } 
}

module.exports = ClientUtil