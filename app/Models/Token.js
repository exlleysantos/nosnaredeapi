'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const dayjs = require('dayjs');

class Token extends Model {
    user() { 
        return this.belongsTo('App/Models/User');
    }

    static getTokenObjectFor(token, type) {
		return this.query()
			.where({
				token,
				type,
			})
			.where(
				'created_at',
				'>=',
				dayjs()
					.subtract(24, 'hour')
					.format('YYYY-MM-DD HH:mm:ss'),
			)
			.first();
	}
}

module.exports = Token
