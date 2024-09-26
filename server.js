const express = require('express');
const connectDB = require('./config/dbConnection')
const errorHandler = require("./middleware/errorHandler");const cors = require('cors');
const dotenv = require('dotenv').config();

connectDB()
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// "http://localhost:3000/api/contacts"