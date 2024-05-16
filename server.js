const express = require("express");
const app = express();
const port = 4000;

function handleServer(req,res){
    res.send("hii there")
}

app.get("/",handleServer)

app.listen(port,() => {
    console.log(`port is listening on ${port}`)
})