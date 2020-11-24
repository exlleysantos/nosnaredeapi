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
const Route = use('Route');

Route.group(() => {
  Route.resource("users", "UserController").apiOnly();
  /*Route.resource("teachers", "TeacherController").apiOnly();
  Route.resource("tags", "TagController").apiOnly();
  Route.resource("contents", "ContentController").apiOnly();
  Route.resource("forums", "ForumController").apiOnly();*/
});

Route.post('/sessions', 'SessionController.create');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
