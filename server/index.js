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
    const usersCollection = client.db('simpleDb').collection('users')

    //post jwt
    app.post('/jwt', (req, res) => {
      const user = req.body
      // console.log('user',user);
      const token = jwt.sign(user, process.env.access_token_secreat_key, { expiresIn: '1h' })
      res.send({ token })
    })

    // varifyAdminJwt
    const varifyAdminJwt = async (req, res, next) => {
      const email = req.decoded.email
      const query = { email: email }
      const user = await usersCollection.findOne(query)
      if (user?.role !== 'admin') {
        return res.status(403).send({error:true,message:'forbidden message'})
      }
      next()
    }











      // create payments intent
      // app.post('/payment',varifyJwt,async (req,res) => {
      //   const { price } = req.body
      //   const amount = parseInt(price * 100)
      //   console.log('price',price,'amount',amount);
      //   const paymentIntent = await stripe.paymentIntents.create({
      //     amount: amount,
      //     currency: 'usd',
      //     payment_method_types:['card']
      //   })
      //   res.send({
      //     clientSecret:paymentIntent.client_secret
      //   })
      // })



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
  console.log(`AirCNC is running on port ${port}`)
})