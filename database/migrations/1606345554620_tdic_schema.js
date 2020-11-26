'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TdicSchema extends Schema {
  up () {
    this.create('tdics', (table) => {
      table.increments()
      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('link').notNullable()
      
      table.enu('destination', ['elementary_1', 'elementary_2', 'high', 'university']).notNullable()
      table.enu('type', ['class', 'online_course', 'document', 'lecture']).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tdics')
  }
}

module.exports = TdicSchema
