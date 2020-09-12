'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
    static get primaryKey() {
        return 'post_id'
    }

    clients() {
        return this.belongsTo('App/Models/Client')
    }

    comments() {
        return this.hasMany('App/Models/Comment')
    }

    static get createdAtColumn(){
        return null
    }

    static get updatedAtColumn(){
        return null
    }

    posts(){
        return this
        .belongsToMany('App/Models/Client')
        .pivotModel('App/Models/Posts')
    }
}

module.exports = Post
