const express = require("express")
const cors = require("cors")
const theParser = require("body-parser")
const app = express()

app.use(cors())
app.use(express.json());
app.use(theParser.urlencoded({extended : true}))

var reqCounter = 0

app.get('/', (req, res) => {
    res.status(500)
    console.log(req.body)
})
app.post('/', (req, res) => {
    if (Object.keys(req.body).length === 0) {
        reqCounter++  
        console.log(reqCounter)
        return res.status(400).send('Request body is empty');
    }
    res.status(200)
    reqCounter++
    console.log(req.body)
    console.log(reqCounter)
})

app.listen(3000)