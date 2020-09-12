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
}

module.exports = Post
