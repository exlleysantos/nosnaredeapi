'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {

    forum () {
        return this.belongsTo('App/Models/Forum')
    }
    archives () {
        return this.hasOne('App/Models/AnswerArchive')
    }
}

module.exports = Answer
