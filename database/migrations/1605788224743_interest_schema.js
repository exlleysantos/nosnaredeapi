'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InterestSchema extends Schema {
  up () {
    this.create('interests', (table) => {
      table.increments()
      
      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table.string('interest').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('interests')
  }
}

module.exports = InterestSchema
