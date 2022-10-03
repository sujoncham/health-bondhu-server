const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()

// health-user
// ltz1CzR2GN9TUKs3
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.send('connected');
})

app.get('/testing', (req, res)=>{
    res.send('Hello, my name is sujon chambugong')
})



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@cluster0.hykmmqu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{

        await client.connect();
        const freeConsultation = client.db('doctorConsultation').collection('freeConsultation');

        app.get('/doctorsfree', async(req, res)=>{
            const result = await freeConsultation.find().toArray()
            res.send(result)
        })
        
    }finally{

    }
}
run().catch(console.dir)




app.listen(port, ()=>{
    console.log('server connected', port);
})