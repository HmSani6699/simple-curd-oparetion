const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// meddelware
app.use(cors());
app.use(express.json());

// hmsadikurrahman120
// rw7vRgnktk18ABE0

const uri = "mongodb+srv://hmsadikurrahman120:rw7vRgnktk18ABE0@cluster0.fnxcgsn.mongodb.net/?retryWrites=true&w=majority";

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


        const usersCollection = client.db("usersBD").collection("users");

        app.get('/user', async (req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get(`/user/:id`, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const user = await usersCollection.findOne(query);
            res.send(user)
        })

        app.post('/user', async (req, res) => {
            const user = req.body;
            console.log('New user', user);
            const result = await usersCollection.insertOne(user);
            res.send(result)
        })

        app.put('/user/:id', async (req, res) => {
            const id = req.params.id;
            const user = req.body;
            console.log(id, user)
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateUser = {
                $set: {
                    name: user.name,
                    email: user.email
                }
            }

            const result = await usersCollection.updateOne(filter, updateUser, options);
            res.send(result);
        })

        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id;
            console.log('please delete id', id);

            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
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
    res.send('Hallo World')
})

app.listen(port, () => {
    console.log('SERVER IS RUNING  ON PORT ', port);
})