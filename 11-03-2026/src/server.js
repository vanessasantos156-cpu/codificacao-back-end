const express = require('express')
const app = express()
const port = 3000


let frutas = [
  {id: 1, nome: "banana"},
  {id: 2, nome: "uva"},
  {id: 3, nome: "laranja"},
  {id: 4, nome: "maçã"}
]



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/alunos/getAll', (req, res) =>{
  res.json({ 
    sucess: true
    
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
