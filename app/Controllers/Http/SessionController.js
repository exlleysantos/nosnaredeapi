'use strict'

class SessionController {

    async store ({ request, auth, response }) { 


        try {
          const { email, password } = request.all()
      
          const token = await auth.attempt(email, password)
      
          return token
        }
        catch (error) {
          
          return response.status(error.code || 500).json({
            message: error.message 
          });
        }
    }

    async show ({request, response}) {
      response.status(200).json({message: "Autenticado!"})
    }

}

module.exports = SessionController
