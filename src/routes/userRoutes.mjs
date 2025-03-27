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
    fastify.get('/entrar', (request, reply) => {
        reply.send('login de usuario')
    })
    
    fastify.post('/entrar', authSchema, userController.authUser)
    
    /* Página do Usuário */
    fastify.get('/admin', userController.getUsers)
    
    fastify.put('/admin', async (request, reply) => {
        reply.send('mudando perfil do usuario')
    })
    
    fastify.delete('/admin', async (request, reply) => {
        reply.send('mudando perfil do usuario'
    })
};

export default userRoutes