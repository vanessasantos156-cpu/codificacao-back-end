const express = require ('express')
const app = express()
const port = 3000

app.listen(PORT, (erro) => {
  if (erro) {
    console.error('Deu um erro', erro);
    return;
  }
  
  console.log(`Servidor rodando lindamente na porta ${PORT}`);
});

let filmes = [
  {id: 1, nome: "shrek"},
  {id: 2, nome: "avatar"},
  {id: 3, nome: "moana"},
  {id: 4, nome: "cruella"}
]

app.get('/filmes', (req, res) => {
  res.json({
    success: true,
    data: filmes
  })
})