const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let frutas = [
  { id: 1, nome: "banana" },
  { id: 2, nome: "uva" },
  { id: 3, nome: "laranja" },
  { id: 4, nome: "maçã" }
]

// rota inicial
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET - listar todas frutas
app.get('/frutas', (req, res) => {
  res.json({
    success: true,
    data: frutas
  })
})

// GET - buscar fruta por id
app.get('/getbyid/:id', (req, res) => {
  const id = parseInt(req.params.id)

  const fruta = frutas.find(f => f.id === id)

  if (!fruta) {
    return res.status(404).json({
      success: false,
      message: "Fruta não encontrada"
    })
  }

  res.json({
    success: true,
    data: fruta
  })
})

// POST - criar nova fruta
app.post('/frutas', (req, res) => {
  const { nome } = req.body

  if (!nome) {
    return res.status(400).json({
      success: false,
      message: "Nome é obrigatório"
    })
  }

  const novaFruta = {
    id: frutas.length + 1,
    nome
  }

  frutas.push(novaFruta)

  res.status(201).json({
    success: true,
    data: novaFruta
  })
})

// iniciar servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`)
})