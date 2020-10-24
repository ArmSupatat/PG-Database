'use strict'
const Client = use('App/Models/Client')
const ClientUtil = require("../../../util/clientUtil")
const ClientValidator = require("../../../service/ClientValidator")

class ClientController {

    async index({ request }) {
        const { references } = request.qs
        const clientUtil = new ClientUtil(Client)
        const client = await clientUtil.getAll(references)
        return { status: 200, error: undefined, data: client }
    }

    async show({ request }) {
        const { id } = request.params

        const validateValue = numberTypeParamValidator(id)

        if (validateValue.error)
            return { status: 500, error: validateValue.error, data: undefined }

        const client = await Client.find(id)

        return { status: 200, error: undefined, data: client || {} }
    }

    async store ({ request }) {
        const { username, password, email, contact } = request.body

        const validatedData = await ClientValidator(request.body)

        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }

        const client = await Client
          .create({ username, email, contact, password })

        return { status: 200, error: undefined, data: { username, email, contact } }
      }

    async update({ request }) {
        const { references = undefined } = request.qs
        const clientUtil = new ClientUtil(Client)
        const client = await clientUtil.update(request, references)
        return { status: 200, error: undefined, data: client }
    }

    async destroy({ request }) {
        const { references = undefined } = request.qs
        const clientUtil = new ClientUtil(Client)
        const client = await clientUtil.deleteById(request, references)
        return { status: 200, error: undefined, data: client }
    }
}

module.exports = ClientController
