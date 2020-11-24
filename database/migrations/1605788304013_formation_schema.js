'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FormationSchema extends Schema {
  up () {
    this.create('formations', (table) => {
      table.increments();      
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.string('link').notNullable();
      table.string('formation_path');
      table.timestamps();
    })
  }

  down () {
    this.drop('formations')
  }
}

module.exports = FormationSchema
