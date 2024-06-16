const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://foodYum:foodyum123@cluster0.vh9jftx.mongodb.net/foodYum?retryWrites=true&w=majority';

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


