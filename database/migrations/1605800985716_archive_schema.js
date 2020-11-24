'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArchiveSchema extends Schema {
  up () {
    this.create('archives', (table) => {
      table.increments();
      table.string('path').notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('archives')
  }
}

module.exports = ArchiveSchema
