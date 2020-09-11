'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {
    static get primaryKey() {
        return 'comment_id'
    }

    clients() {
        return this.belongsTo('App/Models/Client')
    }

    posts() {
        return this.belongsTo('App/Models/Post')
    }
}

module.exports = Comment
