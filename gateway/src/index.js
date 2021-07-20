const gateway = require("fast-gateway");
const server = gateway({
  routes: [
    {
      prefix: "/servicea",
      target: "http://servicea:3000",
    },
    {
      prefix: "/serviceb",
      target: "http://serviceb:3000",
    },
  ],
});

server.start(5000);
