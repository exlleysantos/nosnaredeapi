'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswersSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments();
      table.string('comment', 500).notNullable();
      table.string('archive_path');
      table.timestamps();
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswersSchema
