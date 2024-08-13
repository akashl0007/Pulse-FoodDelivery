const express = require('express');
const app = express();
const port = 5000;

const mongoDB = require("./db");
mongoDB();

app.get('/', (req, res) => {  //app.get is an endpoint. GET route to retrive data from the database.
  res.send('Hello World!------');
});

app.use(express.json())
const createUserRoutes = require('./Routes/CreateUser');
app.use('/api', createUserRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
