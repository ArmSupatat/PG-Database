'use strict'

const Post = use('App/Models/Post')
const PostUtil = require("../../../util/postUtil")
const PostValidator = require("../../../service/PostValidator")


function numberTypeParamValidator(number) {
    if (Number.isNaN(parseInt(number)))
      return { error: `param: ${number} is not supported, please use number type param instead.` }

    return {}
  }

class PostController {

    async index () {
        const posts = await Post.all()

        return { status: 200, error: undefined, data: posts }
      }

      async show ({ request, auth }) {
        const { id } = request.params

        const validatedValue = numberTypeParamValidator(id)

        if (validatedValue.error)
          return { status: 500, error: validatedValue.error, data: undefined }

        const post = await Post.find(id)

        return { status: 200, error: undefined, data: post || {} }
      }

      async store ({ request }) {
        const { party_size, title, details } = request.body
        const date = new Date().toLocaleString()
        const validatedData = await PostValidator(request.body)

        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }

        const post = await Post
        .create({party_size, title, details, date})

        return { status: 200, error: undefined, data: { party_size, title, details, date } }
      }

      async update({ request }) {
        const { body, params } = request
        const { id } = params
        const {  party_size, title, details } = body

        const postId = await Database
          .table('posts')
          .where({ post_id: id })
          .update({  party_size, title, details })

        const post = await Database
          .table('posts')
          .where({ post_id: postId })
          .first()

        return { status: 200, error: undefined, data: { party_size, title, details } }
      }

      async destroy({ request }) {
        const { id } = request.params

        await Database
          .table('posts')
          .where({ post_id: id })
          .delete()

        return { stauts: 200, error: undefined, data: { message: 'success' } }
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
