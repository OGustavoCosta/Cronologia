/* IMPORTAÇÕES VIA ESM */
import Fastify from 'fastify'

/* Importação do Banco de Dados */
import dbConnector from '../database/database.mjs'

/* Importação de Rotas */
import userRoutes from '../routes/userRoutes.mjs'

/**
 * @type {import('fastify').FastifyInstance} Instância do Fastify
*/

const server = Fastify({
  logger: true
})

/* Conecção com o BD */
server.register(dbConnector)

/* Rotas */
server.get('/', (request, reply) =>{
    reply.send( 'Olá Mundo')
})
server.register(userRoutes)

/* Criação do Servidor */
const startServer = async () => {
    try {
        await server.listen({ port: 3030, host: '0.0.0.0' })
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
  }

/* Inicia o Servidor */
startServer()