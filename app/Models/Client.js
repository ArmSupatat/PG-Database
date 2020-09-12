'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
    static get primaryKey() {
        return 'user_id'
    }
    
    posts() {
        return this.hasMany('App/Models/Post');
    }

    comments() {
        return this.hasMany('App/Models/Comment');
    }

    clients(){
        return this
        .hasMany('App/Models/Posts')
    }
}

module.exports = Client
