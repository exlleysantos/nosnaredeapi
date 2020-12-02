'use strict'

class SessionController {

    async store ({ request, auth }) { 


        try {
          const { email, password } = request.all()
      
          const token = await auth.attempt(email, password)
      
          return token
        }
        catch (error) {
          return error;
        }
    }

    async show ({request, response}) {
      response.status(200).json({message: "Autenticado!"})
    }

}

module.exports = SessionController
