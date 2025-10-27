const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const user = require('./routes/user');
const shopList = require('./routes/shopList');

app.use('/user', user);
app.use('/shopList', shopList);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});