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
const Logger = use('Logger')

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
        party_size: faker.integer({ min: 1 , max: 5 }),
        title: 'Apex',
        details: faker.paragraph({ sentences: 1 }),
        date: new Date().toLocaleString()
    }
})

Factory.blueprint('App/Models/Comment', (faker) => {
    return {
        comment: faker.sentence()
    }
})

// Factory.blueprint('App/Models/Join', (faker, i ,data) => {
//     return {
//         user_id : (data.user_id ) && data.user_id [i] || faker.natural(),
//         post_id : (data.post_id ) && data.post_id [i] || faker.natural()
//     }
//     })
