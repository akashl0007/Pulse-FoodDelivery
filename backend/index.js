const express = require('express');
const app = express();
const port = 5000;

const mongoDB = require("./db");
mongoDB();

// Middleware to handle CORS . ==> When frontend and backend are running on different ports (here 3000 and 5000)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());

// Route for creating a user
const createUserRoutes = require('./Routes/CreateUser');
app.use('/api', createUserRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!------');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
