'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CourseSchema extends Schema {
  up () {
    this.create('courses', (table) => {
      table.increments()

      table.integer('tdic_id')
      .unsigned()
      .references('id')
      .inTable('tdics')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table.integer('forum_id')
      .unsigned()
      .references('id')
      .inTable('forums')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      
      table.timestamps()
    })
  }

  down () {
    this.drop('courses')
  }
}

module.exports = CourseSchema
