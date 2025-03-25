import 'dotenv/config'
import { neon } from "@neondatabase/serverless"
import fastifyPostgres from '@fastify/postgres'

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */

const sql = neon(process.env.DATABASE_URL)

async function dbConnector(fastify, options){
    fastify.register(fastifyPostgres, {
        connectionString: process.env.DATABASE_URL
    })
}

export default dbConnector
export { sql }