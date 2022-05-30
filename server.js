const express = require('express');
const app = express();


const port = 3000;

const magicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

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


//Magic Route
console.log(magicBall.length)
//Magic Route
app.get('/magic/:query', (req, res) => {
    console.log(req.params.query )
    res.send(`<h1>${req.params.query}? ${magicBall[Math.floor(Math.random() * magicBall.length)]}</h1>`)
})


app.listen(port, (req, res) => {
    console.log('Listening on route', port)
})