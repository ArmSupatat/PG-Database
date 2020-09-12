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

  // Route.resource("/comments", "commentController")
  Route.get('/comments', 'CommentController.index')
  Route.get('/comments/:id', 'CommentController.index')
  Route.post('/comments', 'CommentController.store')
  // Route.put('/comments/:id', 'CommentController.update')
  // Route.patch('/comments/:id', 'CommentController.update')
  // Route.delete('/comments:id', 'CommentController.destroy')

})