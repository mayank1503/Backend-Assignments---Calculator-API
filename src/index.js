const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send("Hello world!");
});

app.post('/add', (req, res) => {
    if(typeof(req.body.num1)==="string" || typeof(req.body.num2)==="string"){
        res.send({
            status: "error",
            message: "Invalid data types",
            sum:undefined
            });
        res.end();
        return;
    }
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(num1>1000000 || num2>1000000 || num1+num2>1000000){
        res.send({
            status: "error",
            message: "Overflow",
            sum:undefined
            });
        res.end();
        return;
    }
    else{
        res.send({
            status: "success",
            message: "the sum of given two numbers",
            sum:num1+num2
            });
        res.end();
        return;
    }

});

app.post('/sub', (req, res) => {
    if(typeof(req.body.num1)==="string" || typeof(req.body.num2)==="string"){
        res.send({
            status: "error",
            message: "Invalid data types",
            difference:undefined
            });
        res.end();
        return;
    }
    let num1=parseFloat(req.body.num1),num2=parseFloat(req.body.num2);
    if(num1<-1000000 || num2<-1000000 || num1-num2<-1000000){
        res.send({
            status: "error",
            message: "Underflow",
            difference:undefined
            });
        res.end();
        return;
    }
    else{
        res.send({
            status: "success",
            message: "the difference of given two numbers",
            difference:num1-num2
            });
        res.end();
        return;
    }

});

app.post('/multiply', (req, res) => {
    if(typeof(req.body.num1)==="string" || typeof(req.body.num2)==="string"){
        res.send({
            status: "error",
            message: "Invalid data types",
            result:undefined
            });
        res.end();
        return;
    }
    let num1=parseFloat(req.body.num1),num2=parseFloat(req.body.num2);
    if(num1>1000000 || num2>1000000 || num1*num2>1000000){
        res.send({
            status: "error",
            message: "Overflow",
            result:undefined
            });
        res.end();
        return;
    }
    else{
        res.send({
            status: "success",
            message: "The product of given numbers",
            result:num1*num2
            });
        res.end();
        return;
    }

});

app.post('/divide', (req, res) => {
    if(typeof(req.body.num1)==="string" || typeof(req.body.num2)==="string"){
        res.send({
            status: "error",
            message: "Invalid data types",
            result:undefined
            });
        res.end();
        return;
    }
    let num1=parseFloat(req.body.num1),num2=parseFloat(req.body.num2);
    if(num2===0){
        res.send({
            status: "error",
            message: "Cannot divide by zero",
            result:undefined
            });
        res.end();
        return;
    }
    else{
        res.send({
            status: "success",
            message: "The division of given numbers",
            result:num1/num2
            });
        res.end();
        return;
    }

});
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;