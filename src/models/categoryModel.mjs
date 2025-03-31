import { sql } from '../database/database.mjs'

class Category{
    constructor(name){
        this.name = name 
    }

    async list(id){
        let categories

        if(!id){
            categories = await sql`SELECT * from categories`.catch(error => {
                return console.log('Ocorreu um erro: ' + error)
            })
        }
        else{
            categories = await sql`SELECT * from categories WHERE id = ${id}`.catch(error => {
                return console.log('Ocorreu um erro: ' + error)
            })
        }
        

        return categories
    }

    async create(){
        return await sql`INSERT INTO categories (name) VALUES (${this.name})`.catch(error => {
            return console.log('Ocorreu um erro: ' + error)
        })
    }

    async update(id){
        return await sql`UPDATE categories set name = ${this.name} WHERE id = ${id}`.catch(error => {
            return console.log('Ocorreu um erro: ' + error)
        })
    }

    async delete(id){
        return await sql`DELETE FROM categories WHERE id = ${id}`.catch(error => {
            return console.log('Ocorreu um erro: ' + error)
        })
    }
}

export default Category