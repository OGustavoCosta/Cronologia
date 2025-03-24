import Fastify, { fastify } from "fastify"

const server = Fastify()

server.get('/', (request, reply) =>{
    reply.send( 'olá')
})

server.listen({port: 3333, host: '0.0.0.0'}).then(() =>{
    console.log('servidor inciado')
})