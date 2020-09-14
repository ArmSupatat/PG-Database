'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory')

Factory.blueprint('App/Models/Client', (faker) => {
    return {
        username: faker.username(),
        password: faker.password(),
        email: faker.email(),
        contact: faker.phone()
    }
})

Factory.blueprint('App/Models/Post', (faker) => {
    return {
        party_size: faker.integer(),
        title: faker.word(),
        details: faker.paragraph()
    }
})

Factory.blueprint('App/Models/Comment', (faker) => {
    return {
        comment: faker.sentence()
    }
})