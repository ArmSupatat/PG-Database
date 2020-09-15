// const Client = use("App/Models/Client")
// const clientValidator = require("../service/ClientValidator")

class CommentUtil {

    _withReference (instance, references) {
        if(references){
            const extractedReferences = references.split(",")
            instance.with(extractedReferences)
        }
        return instance
    }

    _validation(commentValidator){
        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }
    }

    constructor(CommentModel){
        this._Comment = CommentModel
    }

    getAll (references){
        const comment = this._Comment.query()
        return this._withReference(comment,references).fetch()
    }

    getById(commentId, references){
        this._validation(commentId)
        const comment = this._Comment
            .query()
            .where('comment_id',commentId)
            return this._withReference(comment,references)
                .fetch()
                .then(response => response.first())
    }
      async create (commentInstance, references) {
          const { comment_id } = await this._Comment.create(commentInstance.body)
          const comment = this._Comment
            .query()
            .where('comment_id', comment_id)
          return this._withReference(comment, references)
            .fetch()
            .then(response => response.first())
        }
        
        async update(commentInstance,references){
          const { id } = commentInstance.params
          let comments = await this._Comment.find(id)
          if(!comments){
              return {status : 500 ,error : `Not Found ${id}` , data : undefined};
          }
          comments.merge(commentInstance.body)
          await comments.save();
      
          comments = this._Comment.query().where({comment_id : id})
          return this._withReference(comments,references).fetch().then(response => response.first())
      }
        async deleteById(commentInstance){
          const { id } = commentInstance.params
          const comments = await this._Comment.find(id)
          if(!comments){
              return {status : 500 ,error : `Not Found ${id}` , data : undefined};
          }
          comments.delete()
          await comments.save();
          return {status : 200 ,error : undefined , data : 'success'};
      } 
}

module.exports = CommentUtil