'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
  /**
  * @method profileImage
  *
  * @return {Object}
  */
  profileImage (){
    return this.hasOne('App/Models/Image');
  }

  /**
  * @method interests
  *
  * @return {Object}
  */
  interests (){
    return this.hasMany('App/Models/Interest');
  }

  /**
   * @method forums
   * 
   * @return {Object}
   */

  forums (){
    return this.hasMany('App/Models/Forum');
  }

  /**
   * @method materials
   * 
   * @return {Object}
   */

  materials (){
    return this.hasMany('App/Models/Material');
  }

  /**
   * @method tdics
   * 
   * @return {Object}
   */

  tdics (){
    return this.hasMany('App/Models/Tdic');
  }


}

module.exports = User
