const express = require('express')
const path = require("path")
const fs = require("fs")
const app = express()
const port = 3000


app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile('public\\index.html',{root: path.join(__dirname)})
})
app.post('/reg-data', (req, res) => {
    console.log(">>>>>>>>>>>>>>>>>>", req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err)=>{
        if(err){
            res.status(500).send("User not added")
        }else{
            res.status(200).send("User added")
        }
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})