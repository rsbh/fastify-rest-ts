import Fastify from "fastify";

const PORT = 3000;

const server = Fastify({
  logger: true,
});

server.ready(() => {
  server.listen(PORT, () => {
    server.log.info(`Server is running on: ${PORT}`);
  });
});
