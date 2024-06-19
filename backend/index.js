const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require('./db');
const cors = require('cors');

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// })
// mongoDB.connect();

//Enable CORS
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

//Middleware to parse JSON
app.use(express.json());

//Routes
app.use('/api', require("./routes/CreateUser"))

//Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server

mongoDB().then(() => {
    app.listen(port, () => {
        console.log(`app listening on port ${port}`);
    });
}).catch(error => {
    console.log('Failed to connect to the database:', error);
})
