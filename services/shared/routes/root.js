/// <reference path="../../../global.d.ts" />
'use strict'
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.get('/shared/plugin', async (request, reply) => {
    return { hello: fastify.example }
  })
}