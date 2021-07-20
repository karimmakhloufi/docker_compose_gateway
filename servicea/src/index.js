const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello from service a!");
});

app.get("/testservicea", (req, res) => {
  res.send("Hello from test service a!");
});

app.listen(port, () => {
  console.log(`Server is running`);
});
