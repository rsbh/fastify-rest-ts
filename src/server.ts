import Fastify from "fastify";
import health from "./plugins/health";
const PORT = 3000;

const server = Fastify({
  logger: true,
});

server.register(health);

server.ready(() => {
  server.listen(PORT, () => {
    server.log.info(`Server is running on: ${PORT}`);
  });
});
