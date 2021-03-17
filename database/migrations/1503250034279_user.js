'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments();
      table.string('fullname').notNullable();
      table.string('username').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('institution');
      table.string('cpf').notNullable();
      table.string('lattes');
      table.string('orcid');
      table.enu('level', ['elementary_1', 'elementary_2', 'high', 'university']).notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('users');
  }
}

module.exports = UserSchema;
