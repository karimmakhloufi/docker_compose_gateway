const gateway = require("fast-gateway");
const PORT = 5000;
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

server
  .start(PORT)
  .then(() => console.log(`Server is running on http://localhost:${PORT}`));
