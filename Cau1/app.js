const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.write("Hello, Docker!");
  res.end();
});

server.listen(port, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});