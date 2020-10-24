class ClienttUtil {
    constructor(ClientModel){
        this._Client = ClientModel
    }

    async getAll (references){
        const clients = this._Client.query()

        if(references){
            const extractedReferences = references.split(",")
            clients.with(extractedReferences)
        }

        return clients.fetch()
    }

    getById(clientId, references){
        const client = this._Client.query()

        if (references){
            const extractedReferences = references.split(",")
            client.with(extractedReferences)
        }

        return client.where('subject_id', clientId).fetch()
    }
}

module.exports = ClienttUtil