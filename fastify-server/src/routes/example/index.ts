import {
  FastifyPluginAsync,
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from "fastify";

const example: FastifyPluginAsync = async (
  server: FastifyInstance,
  opts
): Promise<void> => {
  server.get(
    "/",
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { example: true };
    }
  );
};

export default example;
