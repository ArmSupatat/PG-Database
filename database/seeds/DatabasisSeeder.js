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

    const clents = await Factory.model('App/Models/Client').createMany(10)

    const posts = await Factory.model('App/Models/Post').createMany(20)

    const comments = await Factory.model('App/Models/Comment').createMany(100)

    // let currentSubjectIndex = 0;
    // const subjectPerIteration = 2;

    // for (const teacher of teachers) {
    //   const selectedSubjects = subjects.slice(
    //     currentSubjectIndex,
    //     currentSubjectIndex + subjectPerIteration
    //   )
    //   await teacher
    //     .subjects()
    //     .saveMany(selectedSubjects)

    //   currentSubjectIndex += subjectPerIteration
    // }
  }
}

module.exports = DatabasisSeeder
