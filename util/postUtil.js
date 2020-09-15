// const Client = use("App/Models/Client")
// const clientValidator = require("../service/ClientValidator")

class PostUtil {

    _withReference (instance, references) {
        if(references){
            const extractedReferences = references.split(",")
            instance.with(extractedReferences)
        }
        return instance
    }

    _validation(postValidator){
        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }
    }

    constructor(PostModel){
        this._Post = PostModel
    }

    getAll (references){
        const post = this._Post.query()
        return this._withReference(post,references).fetch()
    }

    getById(postId, references){
        this._validation(postId)
        const post = this._Post
            .query()
            .where('post_id',postId)
            return this._withReference(post,references)
                .fetch()
                .then(response => response.first())
    }
      async create (postInstance, references) {
          const { post_id } = await this._Post.create(postInstance.body)
          const post = this._Post
            .query()
            .where('post_id', post_id)
          return this._withReference(post, references)
            .fetch()
            .then(response => response.first())
        }
        
        async update(postInstance,references){
          const { id } = postInstance.params
          let posts = await this._Post.find(id)
          if(!posts){
              return {status : 500 ,error : `Not Found ${id}` , data : undefined};
          }
          posts.merge(postInstance.body)
          await posts.save();
      
          posts = this._Post.query().where({post_id : id})
          return this._withReference(posts,references).fetch().then(response => response.first())
      }
        async deleteById(postInstance){
          const { id } = postInstance.params
          const posts = await this._Post.find(id)
          if(!posts){
              return {status : 500 ,error : `Not Found ${id}` , data : undefined};
          }
          posts.delete()
          await posts.save();
          return {status : 200 ,error : undefined , data : 'success'};
      } 
}

module.exports = PostUtil