'use strict'

const User = use("App/Models/User");
const Helpers = use('Helpers');

class UserController {
    async store ({ request }) {
        const data = request.only(["fullname","level", "username", "email", "password", "cpf"]);
        return await User.create({...data});
    }

    async update ({params, request, response}) {
        const user = await User.find(params.id);
        const data = request.only(["email", "password", "cpf"]);

        user.merge(data);

        await user.save();

        return user;
    }

    async index (){
        const users = User.query().with('profileImage').fetch();
        return users;
    }

    async show ({ params }) {
        const user = User.query(params.id).with('profileImage').fetch();
        //await user.loadOne('profileImage')
        return user;
    }

    async destroy ({ params, auth, response }) {
        const user = await User.findOrFail(params.id);
        console.log(auth.user);
        if (user.id !== auth.user.id) {
          return response.status(401).send({ error: 'Not authorized' });
        }
    
        await user.delete();
    }
}

module.exports = UserController;
