'use strict'

const User = use('App/Models/User')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with answerarchives
 */
class AnswerArchiveController {
  /**
   * Show a list of all answerarchives.
   * GET answerarchives
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new answerarchive.
   * GET answerarchives/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new answerarchive.
   * POST answerarchives
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const answer = await Answer.findOrFail(params.id)

    const archive = request.file('archive', {
      types: ['file'],
      size: '5mb'
    })

    await archive.move(Helpers.tmpPath('archiveUploads'), {
        name: `${Date.now()}-${params.id}`
      })
    
      if (!archive.moved()) {
        return archive.errors()
      }

      answer.answer().create({ path: archive.fileName })
    
    return 'upload succesfull'
  }

  /**
   * Display a single answerarchive.
   * GET answerarchives/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing answerarchive.
   * GET answerarchives/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update answerarchive details.
   * PUT or PATCH answerarchives/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a answerarchive with id.
   * DELETE answerarchives/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AnswerArchiveController
