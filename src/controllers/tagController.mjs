import Tag from "../models/tagModel.mjs";

const tag = new Tag

class TagController{
    async get(request, reply){
        return reply.status(200).send('Todos as tags')
    }

    async getByID(request, reply){
        const id = request.params.id;

        console.log(id)
        return reply.status(200).send('Retorna o tag de ID: ' + id)
    }

    async create(request, reply){
        let {} = request.body

        return reply.status(201).send('Tag Criada')
    }

    async update(request, reply){
        let id = request.params.id

        return reply.status(202).send('Modifica a tag: ' + id)
    }

    async delete(request, reply){
        let id = request.params.id

        return reply.status(200).reply('Deleta a tag: ' + id)
    }
}

export default TagController