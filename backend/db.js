const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to MongoDB");

        const db = mongoose.connection.db;

        const fetchedData = await db.collection("food_items").find({}).toArray();
        const foodCategoryData = await db.collection("food_Category").find({}).toArray();

        global.food_items = fetchedData;
        global.food_Category = foodCategoryData;

        console.log("Data fetched and set to global variables");

    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        throw err; // Re-throw the error to handle it outside this function
    }
};

module.exports = mongoDB;
