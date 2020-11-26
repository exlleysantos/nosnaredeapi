'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {
    archive () {
        return this.hasOne('App/Models/Image')
    }
}

module.exports = Answer
