'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Client extends Model {
    static boot() {
        super.boot()
        this.addHook('beforeSave', async (request) => {
            if (request.dirty.password) {
                request.password = await Hash.make(request.dirty.password)
            }
        })
    }

    static get primaryKey() {
        return 'user_id'
    }
    
    posts() {
        return this.hasMany('App/Models/Post');
    }

    comments() {
        return this.hasMany('App/Models/Comment');
    }

    static get createdAtColumn(){
        return null
    }

    static get updatedAtColumn(){
        return null
    }

    clients(){
        return this
        .hasMany('App/Models/Posts')
    }
}

module.exports = Client
