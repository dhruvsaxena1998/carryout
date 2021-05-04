import {
  FastifyPluginAsync,
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from "fastify";

const root: FastifyPluginAsync = async (
  server: FastifyInstance,
  opts
): Promise<void> => {
  server.get(
    "/",
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { root: true };
    }
  );
};

export default root;
