const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://pulse:pulse@cluster0.frxfcpj.mongodb.net/Pulse-MERN?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    // console.log(fetched_data);

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
