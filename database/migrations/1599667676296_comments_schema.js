'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentsSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments('comment_id', 5)
      table.string("comment", 100)
      table.timestamps("timestamps")
      table.integer('user_id', 5)
      .unsigned()
      table.integer('post_id', 5)
      .unsigned()
      table.foreign('user_id')
      .references('clients.user_id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      table.foreign('post_id')
      .references('posts.post_id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentsSchema
