const express = require("express")
const cors = require("cors")
const theParser = require("body-parser")
const app = express()

app.use(cors())

app.use(theParser.urlencoded({extended : true}))

app.get('/', (req, res) => {
    res.status(500)
    console.log(req.body)
})
app.post('/', (req, res) => {
    res.status(500)
    console.log(req.body)
})

app.listen(3000)