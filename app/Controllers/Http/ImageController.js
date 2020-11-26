'use strict'

const Helpers = use('Helpers')
const User = use('App/Models/User')

/**
 * Resourceful controller for interacting with images
 */
class ImageController {
  /**
   * Create/save a new image.
   * POST images
   */
  async store ({ params, request }) {
    const user = await User.findOrFail(params.id)

    const profilePic = request.file('image', {
      types: ['image'],
      size: '2mb'
    })

    await profilePic.move(Helpers.tmpPath('uploads'), {
        name: `${Date.now()}-${params.id}`
      })
    
      if (!profilePic.moved()) {
        return profilePic.errors()
      }
    
    return 'uplad succesfull'
  }
}

module.exports = ImageController