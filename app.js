const express = require('express');
const { randomUUID } = require('crypto')

const app = express();

app.use(express.json())

const products = [];

app.post("/products", (req, res) => {
  const { name, price } = req.body

  const product = {
    name,
    price,
    id: randomUUID()
  }

  products.push(product)

  return res.json(product)
})

app.get("/products", (req, res) => {
  return res.json(products)
})

app.get("/products/:id", (req, res) => {
  const { id } = req.params
  const produtos = products.find(product => product.id === id)
  return res.json(produtos)
})

app.put("/products/:id", (req, res) => {
  const { id } = req.params
  const { name, price } = req.body

  const indexProduct = products.findIndex((product) => product.id === id)

  products[indexProduct] = {
    ...products[indexProduct],
    name,
    price,
  }
  return res.json({ message: "Produto alterado com sucesso!" })
})


app.delete("/products/:id", (req, res) => {
  const { id } = req.params
  const indexProduct = products.findIndex((product) => product.id === id)

  products.splice(indexProduct, 1)

  return res.json({ message: "Produto removido com sucesso!" })
})

app.listen(3001, () => console.log('Servidor Rodando na porta 3001'))
