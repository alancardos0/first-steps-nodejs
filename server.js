const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": 'application/json' });
  res.end(JSON.stringify({
    data: "Hello World!"
  }))
}).listen(3000, () => console.log("Servidor rodando na porta 3000"))