const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()


app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.send('connected');
})

app.get('/testing', (req, res)=>{
    res.send('Hello, my name is sujon chambugong')
})

app.listen(port, ()=>{
    console.log('server connected', port);
})