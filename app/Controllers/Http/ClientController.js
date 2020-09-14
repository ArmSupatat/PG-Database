'use strict'
const Hash = use('Hash')
const Client = use('App/Models/Client')
const ClientUtil = require("../../../util/clientUtil")

class ClientController {

    async index({ request }) {
        const { references } = request.qs
        const clientUtil = new ClientUtil(Client)
        const client = await clientUtil.getAll(references)
        return { status: 200, error: undefined, data: client }
    }

    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const clientUtil = new ClientUtil(Client)
        const client = await clientUtil.getById(id, references)
        return { status: 200, error: undefined, data: client }
    }

    async store ({ request }) {
        const { username, password, email, contact } = request.body
        const { references } = request.qs
        const clientUtil = new ClientUtil(Client)
        const client = await clientUtil.create(request, references)
        return { status: 200, error: undefined, data: client }
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