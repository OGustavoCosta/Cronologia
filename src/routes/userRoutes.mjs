import User from '../models/userModel.mjs'

/**
 * Encapsula as rotas
 * @param {FastifyInstance} fastify  Instância encapsulada do Fastify
 * @param {Object} options opções do plugin, consulte https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
*/

/* Autenticação do Usuário */
function userRoutes(fastify, options){
    fastify.get('/auth', (request, reply) => {
        reply.send('login de usuario')
    })
    
    fastify.post('/auth', async (request, reply) => {
        reply.send('login de usuario')
    })
    
    /* Página do Usuário */
    fastify.get('/admin', (request, reply) => {
        let name = "Jacinto Pinto"
        let email = "JacintoPintoAkinoRego.gmail.com"
        let password = "123456"
    
        const user = new User(name, email, password)
        reply.send(user.list())
    })
    
    fastify.put('/admin', async (request, reply) => {
        reply.send('mudando perfil do usuario')
    })
    
    fastify.delete('/admin', async (request, reply) => {
        reply.send('mudando perfil do usuario')
    })
};

export default userRoutes