'use strict'

const AnswerController = require('../app/Controllers/Http/AnswerController');

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
const Route = use('Route');

Route.post('/users/:id/picture', 'ImageController.store');
Route.get('/images/:path', 'ImageController.show');

Route.post('/sessions', 'SessionController.store');
Route.get('/sessions', 'SessionController.show');

Route.post('/users', 'UserController.store');
Route.get('/users', 'UserController.index');
Route.get('/users/:id', 'UserController.show');
Route.put('/users/:id', 'UserController.update');
Route.delete('/users/:id', 'UserController.destroy');

Route.resource('/answers', 'AnswerController').apiOnly();

Route.post('/answers/:id/archive', 'AnswerArchiveController.store');
Route.get('/archive/:path', 'AnswerArchiveController.show');

Route.post('forums/:id/answers', 'AnswerController.store').middleware(["auth"]);

Route.resource('/courses', 'CourseController').apiOnly().middleware(["auth"]);
Route.resource('/forums', 'ForumController').apiOnly().middleware(["auth"]);
Route.resource('/interests', 'InterestController').apiOnly();
Route.resource('/links', 'LinkController').apiOnly().middleware(["auth"]);
Route.resource('/materials', 'MaterialController').apiOnly().middleware(["auth"]);
Route.resource('/messages', 'MessageController').apiOnly().middleware(["auth"]);
Route.resource('/tdics', 'TdicController').apiOnly().middleware(["auth"]);



Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
