const mongoose = require('mongoose');
const mongoURI = '';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected");
    }
    catch (err) {
        console.log('Not Connected', err.message);
        throw err;
    }

}

module.exports = mongoDB;


