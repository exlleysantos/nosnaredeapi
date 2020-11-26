'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerArchiveSchema extends Schema {
  up () {
    this.create('answer_archives', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('answer_archives')
  }
}

module.exports = AnswerArchiveSchema
