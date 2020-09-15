'use strict'

const Join = use('App/Models/Join')
const JoinUtil = require("../../../util/joinUtil")
const JoinValidator = require("../../../service/JoinValidator")

class JoinController {

    async index({ request }) {
        const { references } = request.qs
        const joinUtil = new JoinUtil(Join)
        const join = await joinUtil.getAll(references)
        return { status: 200, error: undefined, data: join }
    }

    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const joinUtil = new JoinUtil(Join)
        const join = await joinUtil.getById(id, references)
        return { status: 200, error: undefined, data: join }
    }

    async store ({ request }) {
        const { party_size, title, details } = request.body
        const { references } = request.qs
        const validatedData = await JoinValidator(request.body)

        if (validatedData.error)
            return {status:422,error: validatedData.error, data: undefined}

        const joinUtil = new JoinUtil(Join)
        const join = await joinUtil.create(request, references)
        return { status: 200, error: undefined, data: join }
      }

    async update({ request }) {
        const { references = undefined } = request.qs
        const joinUtil = new JoinUtil(Join)
        const join = await joinUtil.update(request, references)
        return { status: 200, error: undefined, data: join }
    }

    async destroy({ request }) {
        const { references = undefined } = request.qs
        const joinUtil = new JoinUtil(Join)
        const join = await joinUtil.deleteById(request, references)
        return { status: 200, error: undefined, data: join }
    }

}

module.exports = JoinController
