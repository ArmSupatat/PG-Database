'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments('post_id', 5)
      table.integer("party_size", 3)
      table.string("title", 50)
      .notNullable()
      table.string("details", 150)
      table.string("date")
      table.timestamp("user_timestamps").default(this.fn.now())
      table.timestamps('')

      table.integer('user_id', 5)
      .unsigned()
      table.foreign('user_id')
      .references('clients.user_id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
