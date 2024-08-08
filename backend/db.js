const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://pulse:pulse@cluster0.frxfcpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true, // Corrected option
      useUnifiedTopology: true, // Recommended option
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
