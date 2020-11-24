'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InterestSchema extends Schema {
  up () {
    this.create('interests', (table) => {
      table.increments();
      table.string('interest').notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('interests')
  }
}

module.exports = InterestSchema
