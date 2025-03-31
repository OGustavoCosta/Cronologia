import CardController from "../controllers/cardController.mjs"

async function cardRoutes(fastify, options){
    let controller = new CardController

    let cardSchema = {
        "schema": {
            "body": {
                "type": "object",
                "properties": {
                    "title": {"type": "string"},
                    "date": {"type": "string", "format": "data"},
                    "shortDescription": {"type": "string"},
                    "description": {"type": "string"},
                    "source": {"type": "string"},
                    "difficult": {"type": "string"},
                }
            }
        }
    }

    fastify.get('/card', controller.get)
    fastify.get('/card/:id', controller.getByID)
    fastify.post('/card', controller.update)
    fastify.put('/card/:id', controller.update)
    fastify.delete('/card/:id', controller.delete)
}

export default cardRoutes