const express = require("express")
const core = require("cors")
const product = require("./product")
const app = express()
app.use(express.json())
app.use(core())
app.get('/', (req, res) => {

    res.send("welcom to our online shope")
})
app.get('/product', (req, res) => {

    res.send(product)
})
const port = process.env.PORT || 5000
app.listen(port, console.log(`server running on port${port}`))