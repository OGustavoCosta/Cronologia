import CategoryController from "../controllers/categoryController.mjs"

async function categoryRoutes(fastify, options){
    let controller = new CategoryController

    fastify.get('/category', controller.get)
    fastify.get('/category/:id', controller.getByID)
    fastify.post('/category', controller.create)
    fastify.put('/category/:id', controller.update)
    fastify.delete('/category/:id', controller.delete)
}

export default categoryRoutes