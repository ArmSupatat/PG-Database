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

  // Route.resource("/clients", "ClientController")
  Route.get('/clients', 'ClientController.index')
  Route.get('/clients/:id', 'ClientController.index')
  Route.post('/clients', 'ClientController.store')
  // Route.put('/clients/:id', 'ClientController.update')
  // Route.patch('/clients/:id', 'ClientController.update')
  // Route.delete('/clients:id', 'ClientController.destroy')

  // Route.resource("/posts", "PostController")
  Route.get('/posts', 'PostController.index')
  Route.get('/posts/:id', 'PostController.index')
  Route.post('/posts', 'PostController.store')
  // Route.put('/posts/:id', 'PostController.update')
  // Route.patch('/posts/:id', 'PostController.update')
  // Route.delete('/posts:id', 'PostController.destroy')

  // Route.resource("/comments", "commentController")
  Route.get('/comments', 'CommentController.index')
  Route.get('/comments/:id', 'CommentController.index')
  Route.post('/comments', 'CommentController.store')
  // Route.put('/comments/:id', 'CommentController.update')
  // Route.patch('/comments/:id', 'CommentController.update')
  // Route.delete('/comments:id', 'CommentController.destroy')

})