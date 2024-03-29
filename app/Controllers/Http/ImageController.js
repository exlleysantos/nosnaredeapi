'use strict'

const Helpers = use('Helpers')
const Image = use('App/Models/Image')
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
      size: '2mb',
      extnames: ['png', 'jpeg']
    })

    await profilePic.move(Helpers.tmpPath('uploads'), {
        name: `profilePic-${params.id}`
      })
    
      if (!profilePic.moved()) {
        return profilePic.errors()
      }

      user.profileImage().create({ path: profilePic.fileName })
    
    return 'upload succesfull'
  }

  async show ({response, params}) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`));
  }
}

module.exports = ImageController