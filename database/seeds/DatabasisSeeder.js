'use strict'

const ClientsSchema = require('../migrations/1599667626995_clients_schema')

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
const Client = use('App/Models/Client')
const Post = use('App/Models/Post')

class DatabasisSeeder {
  async run() {

    const clents = await Factory.model('App/Models/User').createMany(10)

    const posts = await Factory.model('App/Models/Post').createMany(10)

    const comments = await Factory.model('App/Models/Comment').createMany(10)

    // const UserIds = await Client
    //   .find()

    // const PostIds = await Post
    //   .find()

    const joins = await Factory.model('App/Model/Join').makeMany(10)

    let currentJoinIndex = 0;
    const clientPerPost = 2;

    for (const join of joins) {
      const selectedPosts = clients.slice(
        currentJoinIndex,
        currentJoinIndex + clientPerPost
      )
      await join
        .posts()
        .saveMany(selectedPosts)

        currentJoinIndex += clientPerPost
    }


  }
}

module.exports = DatabasisSeeder
