//https://epressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const urlprefix = '/api'
const mongoose = require('mongoose')

const fs = require('fs');
const cert = fs.readFileSync('Keys/certificate.pem');
const options = {
    server: {sslCA: cert}}
    const connstring = 'mongodb+srv://st10090417:Dutybell84@cluster0.jsdlzpp.mongodb.net/'

    const fruitRoutes = require('./routes/fruit')
    const userRoutes = require('./routes/user')

    mongoose.connect(connstring)
    .then(() =>
    {
        console.log('connected :-)')
    })
    .catch(() =>
    {
        console.log('Not connected :-(')
    }, options );

    app.use(express.json())
    app.use((reg,res,next)=>
    {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,ContentType,Accept,Authorization');
     res.setHeader('Access-Control-Allow-Methods', '*');
     next();
    });
    
//
app.get(urlprefix+'/', (req, res) => {
    res.send('Hello World')
})

app.use(urlprefix+'/fruits', fruitRoutes)
app.use(urlprefix+'/fruits', userRoutes)

module.exports = app;