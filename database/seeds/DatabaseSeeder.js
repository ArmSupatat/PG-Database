'use strict'

/*
|--------------------------------------------------------------------------
| DatabasisSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabasisSeeder {
  async run() {

    const clients = await Factory.model('App/Models/Client').createMany(10)

    const comments = await Factory.model('App/Models/Comment').makeMany(10)

    const posts = await Factory.model('App/Models/Post').makeMany(10)

    let counter = 0;
    const num1 = 2;

    for (const client of clients) {
      const num2 = posts.slice( counter, counter + num1 )
      await client.posts().saveMany(num2)

      counter += num1
    }
  }
}

module.exports = DatabasisSeeder
