import Card from "../models/cardModel.mjs";

const card = new Card

class CardController{
    async get(request, reply){
        return reply.status(200).send('Todos os Card')
    }

    async getByID(request, reply){
        const id = request.params.id;

        console.log(id)
        return reply.status(200).send('Retorna o card de ID: ' + id)
    }

    async create(request, reply){
        let {} = request.body

        return reply.status(201).send('Card Criado')
    }

    async update(request, reply){
        let id = request.params.id

        return reply.status(202).send('Modifica o card: ' + id)
    }

    async delete(request, reply){
        let id = request.params.id

        return reply.status(200).reply('Deleta o card: ' + id)
    }
}

export default CardController