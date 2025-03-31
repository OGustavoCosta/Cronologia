/* IMPORTAÇÕES VIA ESM */
import Fastify from 'fastify'

/* Importação do Banco de Dados */
import { sql } from './database/database.mjs'

/* Importação de Rotas */
import userRoutes from './routes/userRoutes.mjs'
import cardRoutes from './routes/cardRoutes.mjs'

/**
 * @type {import('fastify').FastifyInstance} Instância do Fastify
*/

const fastify = Fastify({
    logger: true
})

/* Conecção com o BD */

/* Rotas */
fastify.get('/', (request, reply) =>{
    reply.status(200).send( 'Bem vindo a API do Cronologia, aqui você encontra dezenas de cards sobre os eventos históricos!')
})
fastify.register(userRoutes)
fastify.register(cardRoutes)

/* Criação do Servidor */
const startServer = async () => {
    try {
        await fastify.listen({ port: 3300, host: '0.0.0.0' })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
  }

/* Inicia o Servidor */
startServer()