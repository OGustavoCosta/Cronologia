import { sql } from '../database/database.mjs'

export default class User{
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
    }

    async list(auth){

        if(auth){
            const user = await sql`SELECT password_hash from admin.users WHERE email = ${auth}`.catch(error => {
                return console.log('Ocorreu um erro: ' + error)
            })

            return user;
        }
        else{
            const users = await sql`SELECT * from admin.users`.catch(error => {
                return console.log('Ocorreu um erro: ' + error)
            })
            return users
        }
    }

    async create(user){
        const {name, email, password} = user

        try{
            await sql`INSERT INTO admin.user  (name, email, password_hash) Values ${name}, ${temail}, ${password}`
            return 'Operação feita com sucesso'
        }
        catch(error){
            console.log('Ocorreu um erro: ' + error)
            return 'Operação Falhou'
        }
    }

    async update(id, user){
        const {name, email, password} = user

        try{
            await sql`UPDATE admin.user SET name: ${name}, email: ${email}, password: ${password} WHERE id: ${id}`
            return 'Operação feita com sucesso'
        }
        catch(error){
            console.log('Ocorreu um erro: ' + error)
            return 'Operação Falhou'
        }
    }

    async delete(id){
        try{
            await sql`DELETE FROM admin.user WHERE id: ${id}`
            return 'Operação feita com sucesso'
        }
        catch(error){
            console.log('Ocorreu um erro: ' + error)
            return 'Operação Falhou'
        }
    }
}