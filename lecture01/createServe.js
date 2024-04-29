const http = require("http");

const server = http.createServer((req, res) => {
  res.end("helloo world");
});
server.listen(3000);
