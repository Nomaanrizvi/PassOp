const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
dotenv.config()


// Connection URL
const url = process.env.mongo_uri;
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';

// app name
const app = express()
app.use(bodyParser.json())
app.use(cors())

// console.log(process.env.mongo_uri);
const port = 3000


client.connect();
console.log('Connected successfully to server');


app.get('/', async (req, res) => {
  res.send('Hello World!')
})

// get all the password
app.get('/password', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

// create password
app.post('/', async (req, res) => {
  password = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.insertOne(password);
  res.send({success: true, result: findResult})
})



// delete password
app.delete('/', async (req, res) => {
  password = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.deleteOne(password);
  res.send({success: true, result: findResult})
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})