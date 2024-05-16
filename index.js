require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const obja = [
name="Yogesh"
]
app.get('/:name', (req, res) => {
    // res.send('Hello World!')
    res.send("Hello " + req.params.name)
})

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(path.join(__dirname,'./templates/index.html'))
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

app.get('/api', (req, res) => {
    res.json({obja})
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})