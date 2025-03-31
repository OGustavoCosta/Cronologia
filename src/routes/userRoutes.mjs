import UserController from '../controllers/userControllers.mjs'

/**
 * Encapsula as rotas
 * @param {FastifyInstance} fastify  Instância encapsulada do Fastify
 * @param {Object} options opções do plugin, consulte https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
*/

function userRoutes(fastify, options){
    const userController = new UserController

    const authSchema = {
        schema: {
            body: {
                type: 'object',
                properties: {
                    email: {type: 'string'},
                    password: {type: 'string'}
                }
            }
        }
    }

    /* Autenticação do Usuário */
    fastify.post('/auth', authSchema, userController.authUser)
};

export default userRoutes