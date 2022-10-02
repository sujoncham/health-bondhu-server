const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()

app.get('/', (req, res)=>{
    res.send('connected');
})

app.listen(port, ()=>{
    console.log('server connected', port);
})