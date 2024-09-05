const express = require("express")
const cors = require("cors")
const theParser = require("body-parser")
const app = express()

app.use(cors())
app.use(express.json());
app.use(theParser.urlencoded({extended : true}))


app.get('/', (req, res) => {
    res.status(500)
    console.log(req.body)
})
app.post('/', (req, res) => {
    if (Object.keys(req.body).length === 0) {
        console.log("Empty body")
    }
    
    const jConst = req.body["codes"]
    console.log(jConst)
    switch (jConst) {
        case "200":
            res.status(200).send("Success")
            break;
        case "301":
            res.status(301).send("Not quite")
            break;
        case "307":
            res.status(307).send("Not quite")
            break;  
        case "400":
            res.status(400).send("Success")
            break;
        case "403":
            res.status(403).send("Not quite")
            break;
        case "404":
            res.status(404).send("Not quite")
            break;           
        case "500":
            res.status(500).send("Not quite")
            break;  
    }
//    if(jConst == "200"){
//        console.log("In")
//        res.status(200).send("Success")
//    }
})

app.listen(3000)