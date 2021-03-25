'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerArchiveSchema extends Schema {
  up () {
    this.create('answer_archives', (table) => {
      table.increments()
      
      table.integer('answer_id')
      .unsigned()
      .references('id')
      .inTable('answers')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('answer_archives')
  }
}

module.exports = AnswerArchiveSchema
