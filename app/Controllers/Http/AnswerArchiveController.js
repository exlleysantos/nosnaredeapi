'use strict'
const Helpers = use('Helpers')
const User = use('App/Models/Forum')
const Answer = use('App/Models/Answer')

const crypto = require('crypto');

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
  async store ({ request, params }) {
    const answer = await Answer.findOrFail(params.id)

    const archive = request.file('archive', {
      types: ['pdf', 'docx', 'doc', 'png', 'jpeg', 'pptx','xlsx', 'odf'],
      size: '5mb'
    })

    await archive.move(Helpers.tmpPath('uploads'), {
        name: `${crypto.randomBytes(10).toString('HEX')}`
      })
    
      if (!archive.moved()) {
        console.log("erro")
        return archive.error()
      }

      answer.archives().create({ path: archive.fileName })
    
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
  async show ({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`));
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
