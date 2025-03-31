import Tag from "../models/tagModel.mjs";

const tag = new Tag

class TagController{
    async get(request, reply){
        const tags = await tag.list()

        return reply.status(200).send(tags)
    }

    async getByID(request, reply){
        const id = request.params.id;
        const tags = await tag.list(id)

        if(tags.length === 0){
            return reply.status(404).send("Não encontramos nenhuma TAG com esse ID")
        }

        return reply.status(200).send(tags);
    }

    async create(request, reply){
        let { name } = request.body

        tag.name = name
        tag.create()

        return reply.status(201).send('TAG Criada')
    }

    async update(request, reply){
        const id = request.params.id
        const { name } = request.body

        tag.name = name
        tag.update(id)


        return reply.status(202).send("TAG Modificada")
    }

    async delete(request, reply){
        let id = request.params.id

        tag.delete(id)

        return reply.status(200).send("TAG Deletada")
    }
}

export default TagController