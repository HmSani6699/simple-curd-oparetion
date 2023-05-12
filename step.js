/***
 *  1. [VISI] Mongodb website
 *  2. login to google 
 *  3. Accept privacy & thems of service   (submit)
 * 
 * 
 *  4. Welcome page and three filth full up 
 *  5. Deploy page : free host
 * 
 * 
 *  6. Security Qickstart
 * 
 *       --------------
 *      Open start manu and creat new server
 *            --------------
 *  1. mkdir simple-surd-oparation
 *  2. cd simple-surd-oparation
 *  3. npm i express cors mongodb
 *  4. open package.josn and added to scripts: 'start':'node index.js
 * 
 *                -------------
 *                     index.js 
 *                    -----------------
 * 
 * 
 *                        ------------
 *                   Creat a simple client curd  site 
 *                            -----------
 *  1. set up to route  in rect router 
 *  2. client site data to send in server site us to post method 
 * 
 * 
 *           ----------------------
 *                 data pas to server site 
 *                   --------------------
 * 
 *  1. CLIENT SITE a (
 * fetch('http://localhost:5000/user',{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
    )
    * 2. SERVER SITE :  app.post('/user', async (req, res) => {
         const user= req.body;
         console.log('New user',user);
        })
    *
    * 
    *                        -----------------------
    *                           DATABAGE DATA STOR and data creat
    *                               ----------------------
    * 
    * 1. [VISIT ] :NODE MONGODB CURD >Usage Examples > Insert Operation >  Insert a Document
    * 2.  const usersCollection = client.db("usersBD").collection("users");
    * 3.  const result = await usersCollection.insertOne(user);
    * 4.  res.send(result)
    * 
    * 
    *               ---------------
    *                     Data read
    *                  -------------
    * 1. [VISIT ] :NODE MONGODB CURD > Usage Examples > find Operation >  find Multiple Document
    * 2. app.get('/user',async (req,res)=>{
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
             res.send(result)
        })
    * 
    * 
    * 
    * 
    * 
    *                       -------------------
    *                           Data Delete
    *                        -----------------
    *            [CLIENT SITE]
    * 
    * 1. creat a button , and added to onclik , pas to unick id 
    * 2. const handleDelte = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/user/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    *         [SERVER SITE]
    * 1. [VISIT ] :NODE MONGODB CURD > Usage Examples > Delete Operation >  Delete a Document
    * 2.   const query ={_id : new ObjectId(id)};
            const result = await usersCollection.deleteOne(query);
            res.send(result)
    * *
 */