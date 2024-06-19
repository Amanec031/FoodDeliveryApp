const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI); 
        console.log("Connected");
    }
    catch (err) {
        console.log('Not Connected', err.message);
        throw err;
    }

}

module.exports = mongoDB;

 
