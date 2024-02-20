const express =  require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = process.env.PORT || 3000;
const MONGOBD_URI = 'mongodb://localhost:27017/mydatabase';

app.use(express.json());

MongoClient.connect(MONGODB_URI, {useNewUrlParser : true, useUnifiedToplogy : true })
.then(client =>{
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');
    
    app.get('/data', async (req,res)=>{
        const data = await collection.find({}).toArray();
        res.json(data);
    });
}
app.listen(PORT, ()=>{
    console.log(`server is runnign on port ${PORT}`);
});

})
.catch(err => console.error(err));
