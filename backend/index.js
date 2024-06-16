const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require('./db');

// Connect to MongoDB
mongoDB();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(express.json());
app.use('/api', require("./routes/CreateUser"))
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
