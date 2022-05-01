import Fastify from "fastify";
import swagger from "@fastify/swagger";
import health from "./plugins/health";

const PORT = 3000;

const server = Fastify({
  logger: true,
});

server.register(health);
server.register(swagger, {
  exposeRoute: true,
});

server.ready(() => {
  server.listen(PORT, () => {
    server.log.info(`Server is running on: ${PORT}`);
  });
});
