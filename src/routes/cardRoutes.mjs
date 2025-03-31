import CardController from "../controllers/cardController.mjs"

async function cardRoutes(fastify, options){
    let cardController = new CardController

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

    fastify.get('/card', cardController.get)
    fastify.get('/card/:cardID', cardController.getByID)
    fastify.post('/card', cardController.update)
    fastify.put('/card:cardID', cardController.update)
    fastify.delete('/card/:cardID', cardController.delete)
}

export default cardRoutes