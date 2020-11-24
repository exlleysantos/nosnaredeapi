'use strict'

const User = use("App/Models/User");

class UserController {
    async store ({ request }) {
        const data = request.only(["username", "email", "password", "cpf"]);
        
        return await User.create(data);
    }

    async index (){
        
        return User.all();
    }

    async show ({ params }) {
    
        return await User.findOrFail(params.id);
    }

    async destroy ({ params, auth, response }) {
        const user = await User.findOrFail(params.id);
      
        if (user.id !== auth.user.id) {
          return response.status(401).send({ error: 'Not authorized' });
        }
    
        await user.delete();
    }
}

module.exports = UserController;
