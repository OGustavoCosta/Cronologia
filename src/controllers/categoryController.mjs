import Category from "../models/categoryModel.mjs";

const category = new Category

class CategoryController{
    async get(request, reply){
        return reply.status(200).send('Todos as categorias')
    }

    async getByID(request, reply){
        const id = request.params.id;

        console.log(id)
        return reply.status(200).send('Retorna a categoria de ID: ' + id)
    }

    async create(request, reply){
        let {} = request.body

        return reply.status(201).send('Categoria Criado')
    }

    async update(request, reply){
        let id = request.params.id

        return reply.status(202).send('Modifica a categoria: ' + id)
    }

    async delete(request, reply){
        let id = request.params.id

        return reply.status(200).reply('Deleta a categoria: ' + id)
    }
}

export default CategoryController