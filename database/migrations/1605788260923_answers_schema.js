'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswersSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table.integer('forum_id')
      .unsigned()
      .references('id')
      .inTable('forums')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
/*
      table.integer('archive_id')
      .unsigned()
      .references('id')
      .inTable('answer_archives')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
*/ 
      table.string('comment', 500).notNullable()
      table.timestamps();
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswersSchema
