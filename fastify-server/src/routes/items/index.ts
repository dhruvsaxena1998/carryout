import {
  FastifyPluginAsync,
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from "fastify";

// Model
import Item from "../../models/Item";

const example: FastifyPluginAsync = async (
  server: FastifyInstance,
  opts
): Promise<void> => {
  /**
   * @route   /items
   * @method  GET
   */
  server.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const entities = await Item.findAll();
      reply.code(200).send(entities);
    } catch (err) {
      server.log.error(err.message);
      reply.code(500).send(err);
    }
  });

  /**
   * @route   /items
   * @method  POST
   */
  server.post("/", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const response = await Item.create(request.body);
      reply.code(201).send(response);
    } catch (err) {
      server.log.error(err.message);
      reply.code(500).send(err);
    }
  });
};

export default example;
