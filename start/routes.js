'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Party Games' }
})

Route.group(() => {

  Route.resource('/clients','ClientController')

  Route.resource("/posts", "PostController")

  Route.resource("/comments", "CommentController")

  Route.resource("/client_join_posts", "JoinController")

})