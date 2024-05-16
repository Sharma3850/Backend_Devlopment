require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Login!')
})
app.get('/signup', (req, res) => {
    res.send('signup!')
})
app.get('/chai', (req, res) => {
    res.send('<h2>Chai!</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})