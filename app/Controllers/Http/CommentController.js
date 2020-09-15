'use strict'

const Comment = use('App/Models/Comment')
const CommentUtil = require("../../../util/commentUtil")
const CommentValidator = require("../../../service/CommentValidator")

class CommentController {

    async index({ request }) {
        const { references } = request.qs
        const commentUtil = new CommentUtil(Comment)
        const comment = await commentUtil.getAll(references)
        return { status: 200, error: undefined, data: comment }
    }

    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const commentUtil = new CommentUtil(Comment)
        const comment = await commentUtil.getById(id, references)
        return { status: 200, error: undefined, data: comment }
    }

    async store ({ request }) {
        const { comment } = request.body
        const { references } = request.qs
        const validatedData = await CommentValidator(request.body)

        if (validatedData.error)
            return {status:422,error: validatedData.error, data: undefined}

        const commentUtil = new CommentUtil(Comment)
        const user_comment = await commentUtil.create(request, references)
        return { status: 200, error: undefined, data: user_comment }
      }

    async update({ request }) {
        const { references = undefined } = request.qs
        const commentUtil = new CommentUtil(Comment)
        const comment = await commentUtil.update(request, references)
        return { status: 200, error: undefined, data: comment }
    }

    async destroy({ request }) {
        const { references = undefined } = request.qs
        const commentUtil = new CommentUtil(Comment)
        const comment = await commentUtil.deleteById(request, references)
        return { status: 200, error: undefined, data: comment }
    }

}

module.exports = CommentController
