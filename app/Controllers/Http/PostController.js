'use strict'
const Database = use('Database')
const Hash = use('Hash')
const Post = use('App/Models/Post')
// const PostValidator = require("../../../service/PostValidator")


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
    
        const post = await Client.find(id)
    
        return { status: 200, error: undefined, data: post || {} }
      }
    
      async store ({ request }) {
        const { party_size, title, details } = request.body
    
        // const validatedData = await PostValidator(request.body)
    
        // if (validatedData.error)
        //   return { status: 422, error: validatedData.error, data: undefined }
    
        const post = await Post
        .query()
        .insert({party_size, title, details})
    
        return { status: 200, error: undefined, data: {  party_size, title, details } }
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
    
        return { status: 200, error: undefined, data: post }
      }
    
      async destroy({ request }) {
        const { id } = request.params
    
        await Database
          .table('posts')
          .where({ post_id: id })
          .delete()
    
        return { stauts: 200, error: undefined, data: { message: 'success' } }
      }

}

module.exports = PostController
