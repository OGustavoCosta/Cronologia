import User from '../models/userModel.mjs'
import { sql } from '../database/database.mjs'

const user = new User

class UserController{

    async getUsers(request, reply){
        return reply.send(await user.list())
    }

    async authUser(request, reply) { 
        const {email, password} = request.body

        let auth = await user.list(email)
        let password_hash = auth[0].password_hash

        if(password_hash === password){
            return reply.send('Login Feito meu mano')
        }
        else{
            return reply.send('Ta errado elemento')
        }
        
    }
}

export default UserController