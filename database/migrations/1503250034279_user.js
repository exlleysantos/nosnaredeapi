'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments();
      table.string('username').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('cpf').notNullable();
      table.string('avatar');
      table.string('lattes');
      table.string('orcid');
      table.enu('type', ['adm', 'teacher']).notNullable().defaultTo('teacher');
      table.timestamps();
    })
  }

  down () {
    this.drop('users');
  }
}

module.exports = UserSchema;
