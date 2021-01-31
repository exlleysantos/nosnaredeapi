'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Forum extends Model {

    user() {
        return this.belongsTo('App/Models/User')
    }

    answers() {
        return this.hasMany('App/Models/Answer');
    }
}

module.exports = Forum
