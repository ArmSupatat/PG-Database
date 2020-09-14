'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Join extends Model {
    static get primaryKey() {
        return 'join_id'
    }

    static get createdAtColumn(){
        return null
    }

    static get updatedAtColumn(){
        return null
    }

    clients() {
        return this.belongsTo('App/Models/Client');
    }

    posts() {
        return this.belongsTo('App/Models/Post');
    }
}

module.exports = Join
