const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://pulse:pulse@cluster0.frxfcpj.mongodb.net/Pulse-MERN?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB");

        // Access the "food_items" collection
        const fetched_data = mongoose.connection.db.collection("food_items");
        const foodCategory = mongoose.connection.db.collection("food_category");

        // Check if the collections exist
        if (!fetched_data || !foodCategory) {
            console.error("Collections not found in the database.");
            return;
        }

        // Fetch data from the "food_items" and "foodCategory" collections
        const data = await fetched_data.find({}).toArray();
        const catData = await foodCategory.find({}).toArray();

        // Check if data is fetched
        if (data.length === 0) {
            console.log("No data found in the 'food_items' collection.");
        } else if (catData.length === 0) {
            console.log("No data found in the 'foodCategory' collection.");
        } else {
            // Assign the data to the global variables
            global.food_items = data;
            global.foodCategory = catData;

            // Log the fetched data for debugging
            // console.log("Fetched food items:", global.food_items);
            // console.log("Fetched food categories:", global.foodCategory);
        }

    } catch (err) {
        console.error("MongoDB connection error or data fetch error:", err);
        process.exit(1); // Exit the process with an error code
    }
};

module.exports = mongoDB;
