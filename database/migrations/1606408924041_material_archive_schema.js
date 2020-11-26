'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MaterialArchiveSchema extends Schema {
  up () {
    this.create('material_archives', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('material_archives')
  }
}

module.exports = MaterialArchiveSchema
