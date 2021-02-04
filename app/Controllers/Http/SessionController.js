'use strict'

const User = use('App/Models/User')
const Token = use('App/Models/Token')


class SessionController {

    async store ({ request, auth, response }) { 

      const { email, password } = request.body;
      
      const user = await User.findBy('email', email );

      if (!user) {
				return response.status(404).json({message: 'User Not Found'});
      }
      
      const token = await auth.attempt(email, password);
      
      return response.status(200).json({user, token});
        
    }  
    
    async show ({request, response}) { 
      response.status(200);
    }

}

module.exports = SessionController
