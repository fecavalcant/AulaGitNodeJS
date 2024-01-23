const express = require('express')
const cors = require ('cors')
const router = require('./routes/alunoRoutes')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))//tratamento de requisicao html
app.set('view engine','ejs')//setando que iremos usar ejs
app.use('/alunos', router)
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`)
})