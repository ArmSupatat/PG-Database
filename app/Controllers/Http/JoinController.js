'use strict'
const Database = use('Database')
const Hash = use('Hash')
const Join = use('App/Models/Join')
const JoinValidator = require("../../../service/JoinValidator.js")


function numberTypeParamValidator(number) {
    if (Number.isNaN(parseInt(number)))
      return { error: `param: ${number} is not supported, please use number type param instead.` }
  
    return {}
  }


class JoinController {
    async index () {
        const joins = await Join.all()
    
        return { status: 200, error: undefined, data: joins }
      }
    
      async show ({ request, auth }) {
        const { id } = request.params
    
        const validatedValue = numberTypeParamValidator(id)
    
        if (validatedValue.error)
          return { status: 500, error: validatedValue.error, data: undefined }
    
        const join = await Join.find(id)
    
        return { status: 200, error: undefined, data: join || {} }
      }
    
      async store ({ request }) {
        const { user_id, post_id } = request.body
    
        const validatedData = await JoinValidator(request.body)
    
        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }
    
        const join = await Join
        .create({ user_id, post_id})
    
        return { status: 200, error: undefined, data: { user_id, post_id } }
      }
    
    
      async destroy({ request }) {
        const { id } = request.params
    
        await Database
          .table('client_join_posts')
          .where({ join_id: id })
          .delete()
    
        return { stauts: 200, error: undefined, data: { message: 'success' } }
      }
}

module.exports = JoinController
