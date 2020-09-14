// const Client = require("../app/Models/Client")
const ClientValidator = require("../../../service/ClientValidator")

class ClientUtil {

    _withReference (instance, references) {
        if(references){
            const extractedReferences = references.split(",")
            instance.with(extractedReferences)
        }
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

    getById(references){
        const client = this._Client.query()

        if (references){
            const extractedReferences = references.split(",")
            client.with(extractedReferences)
        }

        return client.where('subject_id', clientId).fetch()
    }
}

module.exports = ClienttUtil