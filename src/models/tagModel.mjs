import { sql } from '../database/database.mjs'

class Tag{
    constructor(name){
        this.name = name 
    }

    async list(id){
        let tags

        if(!id){
            tags = await sql`SELECT * from tags`.catch(error => {
                return console.log('Ocorreu um erro: ' + error)
            })
        }
        else{
            tags = await sql`SELECT * from tags WHERE id = ${id}`.catch(error => {
                return console.log('Ocorreu um erro: ' + error)
            })
        }
        

        return tags
    }

    async create(){
        return await sql`INSERT INTO tags (name) VALUES (${this.name})`.catch(error => {
            return console.log('Ocorreu um erro: ' + error)
        })
    }

    async update(id){
        return await sql`UPDATE tags set name = ${this.name} WHERE id = ${id}`.catch(error => {
            return console.log('Ocorreu um erro: ' + error)
        })
    }

    async delete(id){
        return await sql`DELETE FROM tags WHERE id = ${id}`.catch(error => {
            return console.log('Ocorreu um erro: ' + error)
        })
    }
}

export default Tag