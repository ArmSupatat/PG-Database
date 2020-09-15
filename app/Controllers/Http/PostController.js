'use strict'

const Post = use('App/Models/Post')
const PostUtil = require("../../../util/postUtil")
const PostValidator = require("../../../service/PostValidator")

class PostController {

    async index({ request }) {
        const { references } = request.qs
        const postUtil = new PostUtil(Post)
        const post = await postUtil.getAll(references)
        return { status: 200, error: undefined, data: post }
    }

    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const postUtil = new PostUtil(Post)
        const post = await postUtil.getById(id, references)
        return { status: 200, error: undefined, data: post }
    }

    async store ({ request }) {
        const { party_size, title, details } = request.body
        const { references } = request.qs
        const validatedData = await PostValidator(request.body)

        if (validatedData.error)
            return {status:422,error: validatedData.error, data: undefined}

        const postUtil = new PostUtil(Post)
        const post = await postUtil.create(request, references)
        return { status: 200, error: undefined, data: post }
      }

    async update({ request }) {
        const { references = undefined } = request.qs
        const postUtil = new PostUtil(Post)
        const post = await postUtil.update(request, references)
        return { status: 200, error: undefined, data: post }
    }

    async destroy({ request }) {
        const { references = undefined } = request.qs
        const postUtil = new PostUtil(Post)
        const post = await postUtil.deleteById(request, references)
        return { status: 200, error: undefined, data: post }
    }

}

module.exports = PostController
