'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MaterialSchema extends Schema {
  up () {
    this.create('materials', (table) => {
      table.increments()

      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
/*
      table.integer('archive_id')
      .unsigned()
      .references('id')
      .inTable('material_archives')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
*/
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('link').notNullable()

      table.enu('destination', ['elementary_1', 'elementary_2', 'high', 'university']).notNullable()
      table.enu('type', ['document', 'audio', 'video', 'other']).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('materials')
  }
}

module.exports = MaterialSchema
