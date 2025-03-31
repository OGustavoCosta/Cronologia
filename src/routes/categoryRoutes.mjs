import CategoryController from "../controllers/categoryController.mjs"

async function categoryRoutes(fastify, options){
    let controller = new CategoryController

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

    fastify.get('/category', controller.get)
    fastify.get('/category/:id', controller.getByID)
    fastify.post('/category', controller.update)
    fastify.put('/category/:id', controller.update)
    fastify.delete('/category/:id', controller.delete)
}

export default categoryRoutes