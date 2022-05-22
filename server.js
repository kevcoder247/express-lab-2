const express = require('express');
const app = express();


const port = 3000;
//Greeting Route
app.get('/greeting/kevin', (req, res) => {
    res.send('Wow! Hello there, Jimmy boy')
})

app.listen(port, (req, res) => {
    console.log('hello')
})