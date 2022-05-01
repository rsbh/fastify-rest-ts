import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

export interface Options {}
type Done = (err?: Error) => void;

async function healthRoute(
  fastify: FastifyInstance,
  opts: Options,
  done: Done
) {
  fastify.route({
    url: "/health",
    method: "GET",
    handler: async (request, reply) => {
      return reply.send({ message: "OK" });
    },
  });
  done();
}

export default fp(healthRoute);
