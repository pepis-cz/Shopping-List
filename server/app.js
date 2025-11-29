const userRouter = require('./routers/user');
const sListRouter = require('./routers/shoppingList');

const { MongoClient } = require("mongodb");

const express = require('express');
const cors = require('cors');
const port = 8888;
const app = express();

app.use(express.json())
app.use(cors());

const url = "mongodb+srv://hovno385_db_user:q8DJNzjgGCZhi94z@shopping-list.qxdfl7a.mongodb.net/"
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        global.db = client.db('shopping-list-db');
        console.log("Successfully connected to Atlas");
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
}

run().then(() => {
    app.use('/user', userRouter);
    app.use('/sList',sListRouter);

    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.listen(port, () => {
        console.log(`app listening on port ${port}`);
    });
});