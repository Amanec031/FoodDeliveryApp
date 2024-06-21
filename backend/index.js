const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoDB = require('./db');
const cors = require('cors');
const morgan = require('morgan');

// Enable CORS
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware to parse JSON
app.use(express.json());

// Request logging
app.use(morgan('dev'));

// Routes
app.use('/api', require("./routes/CreateUser"));
app.use('/api', require("./routes/DisplayData"));

// Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server after connecting to MongoDB
mongoDB().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database:', error);
});
