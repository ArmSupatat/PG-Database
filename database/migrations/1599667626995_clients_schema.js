'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments('user_id', 5)
      table.string("username", 100)
      .notNullable()
      table.string("password", 100)
      .notNullable()
      table.string("email", 100)
      .notNullable()
      table.string("contact", 100)
      .notNullable()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
