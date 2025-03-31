import TagController from "../controllers/tagController.mjs"

async function tagRoutes(fastify, options){
    let controller = new TagController

    let Schema = {
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

    fastify.get('/tag', controller.get)
    fastify.get('/tag/:id', controller.getByID)
    fastify.post('/tag', controller.update)
    fastify.put('/tag/:id', controller.update)
    fastify.delete('/tag/:id', controller.delete)
}

export default tagRoutes