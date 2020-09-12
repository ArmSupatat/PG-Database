'use strict'

const Database = use('Database')
const Comment = use('App/Models/Comment')
// const Validator = use('Validator')
// const ClientValidator = require("../../../service/ClientValidator")

function numberTypeParamValidator(number) {
    if (Number.isNaN(parseInt(number)))
        return { error: `param: ${number} is not supported, please use number type param instead.` }

    return {}
}

class CommentController {

    async index() {
        const comments = await Comment.all()

        return { status: 200, error: undefined, data: comments }
    }

    async show({ request, auth }) {
        const { id } = request.params

        const validateValue = numberTypeParamValidator(id)

        if (validateValue.error)
            return { status: 500, error: validateValue.error, data: undefined }

        const comment = await Comment.find(id)

        return { status: 200, error: undefined, data: comment || {} }
    }

    async store({ request }) {
        const { comment } = request.body

        // const rules = {
        //     first_name:'required',
        //     last_name:'required',
        //     email:'required|unique:teachers,email',
        //     password:'required|max:12'
        // }

        // const validation = await Validator.validateAll(request.body, rules)

        // if(validation.false)
        //  return {status: 422, error: validation.message(), data: undefined}

        const user_comment = await Comment
            .query()
            .insert({ comment })

        return { status: 200, error: undefined, data: { comment } }
    }

    async update({ request }) {
        const { body, params } = request
        const { id } = params
        const { comment } = body

        const commentId = await Database
            .table('comments')
            .where({ comment_id: id })
            .update({ comment })

        const user_comment = await Database
            .table('comments')
            .where({ comment_id: commentId })
            .first()

        return { status: 200, error: undefined, data: { comment } }
    }

    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('comments')
            .where({ comment_id: id })
            .delete()

        return { status: 200, error: undefined, data: { message: 'success' } }
    }

}

module.exports = CommentController
