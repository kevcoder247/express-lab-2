const express = require('express');
const app = express();


const port = 3000;

//Greeting Route
app.get('/greeting/kevin', (req, res) => {
    res.send('Wow! Hello there, Jimmy boy')
})

//Tip Calulator Route
app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params)
    let total = req.params.total;
    let tip = req.params.tipPercentage;
    res.send(`${(tip / total ) * 100}`)
})

app.listen(port, (req, res) => {
    console.log('hello')
})