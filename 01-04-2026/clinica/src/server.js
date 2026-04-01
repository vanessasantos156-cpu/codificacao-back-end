import express from 'express'
import fruitRoutes from './routes/pacienteroutes.js'

const app = express()
const port = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.json("Hello World")
})

//rotas
app.use("/fruits", fruitRoutes)

app.listen(port, () => {
    console.log(`O servidor da clínica está rodando em http://localhost:${port}`);

})

