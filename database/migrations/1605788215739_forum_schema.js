'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ForumSchema extends Schema {
  up () {
    this.create('forums', (table) => {
      table.increments()
      
      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table.string('title').notNullable()
      table.string('description').notNullable()
      
      table.enu('type', ['doubts', 'experience', 'curiosity', 'general']).notNullable().defaultTo('general')
      table.timestamps()
    })
  }

  down () {
    this.drop('forums')
  }
}

module.exports = ForumSchema
