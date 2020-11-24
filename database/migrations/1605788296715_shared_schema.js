'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SharedSchema extends Schema {
  up () {
    this.create('shareds', (table) => {
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.string('link').notNullable();
      table.string('shared_path');
      table.timestamps();
    })
  }

  down () {
    this.drop('shareds')
  }
}

module.exports = SharedSchema
