const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 4000

// middleware
// const corsOptions = {
//   origin: '*',
//   credentials: true,
//   optionSuccessStatus: 200,
// }
// app.use(cors(corsOptions))
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.izhktyr.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const usersCollection = client.db('aircncDb').collection('users')
    // const roomsCollection = client.db('aircncDb').collection('rooms')
    // const bookingsCollection = client.db('aircncDb').collection('bookings')

    //save user role and email in db
    app.put('/users/:email',async (req,res) => {
      const email = req.params.email
      console.log(`email:${email}`);
      const user = req.body
      console.log(`user:`,user);
      const query = { email: email }
      const options = { upsert: true }
      const updateDoc = {
        $set:user,
      }
      const result = await usersCollection.updateOne(query,updateDoc,options)
      // console.log('result', result);
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('AirCNC Server is running..')
})

app.listen(port, () => {
  console.log(`AirCNC is running on Port:http://localhost:${port}`)
})
