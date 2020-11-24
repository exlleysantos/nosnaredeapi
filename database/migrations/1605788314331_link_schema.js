'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LinkSchema extends Schema {
  up () {
    this.create('links', (table) => {
      table.increments();
      table.string('link_description');
      table.string('link');
      table.timestamps();
    })
  }

  down () {
    this.drop('links')
  }
}

module.exports = LinkSchema
