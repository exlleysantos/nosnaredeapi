'use strict'

const Forum = use("App/Models/Forum");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with forums
 */
class ForumController {
  /**
   * Show a list of all forums.
   * GET forums
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
      const forums = Forum.query().with('answers').fetch();
      return forums;
  }

  /**
   * Create/save a new forum.
   * POST forums
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only(["title", "description"]);
    const forum = await Forum.create({ user_id: auth.user.id, ...data });

    return forum;

  }

  /**
   * Display a single forum.
   * GET forums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const forum = await Forum.find(params.id);
    await forum.load('answers')
    return forum;
  
  }

  /**
   * Render a form to update an existing forum.
   * GET forums/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update forum details.
   * PUT or PATCH forums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a forum with id.
   * DELETE forums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ForumController
