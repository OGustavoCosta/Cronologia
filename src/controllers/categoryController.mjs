import Category from "../models/categoryModel.mjs";

const category = new Category

class CategoryController{
    async get(request, reply){
        const categories = await category.list()

        return reply.status(200).send(categories)
    }

    async getByID(request, reply){
        const id = request.params.id;
        const categories = await category.list(id)

        if(categories.length === 0){
            return reply.status(404).send("Não encontramos nenhuma categoria esse ID")
        }

        return reply.status(200).send(categories);
    }

    async create(request, reply){
        let { name } = request.body

        category.name = name
        category.create()

        return reply.status(201).send('Categoria Criado')
    }

    async update(request, reply){
        const id = request.params.id
        const { name} = request.body

        category.name = name
        category.update(id)


        return reply.status(202).send("Categoria Modificada")
    }

    async delete(request, reply){
        let id = request.params.id

        category.delete(id)

        return reply.status(200).send("Categoria Deletada")
    }
}

export default CategoryController