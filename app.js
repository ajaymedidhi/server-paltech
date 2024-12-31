const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contacts');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors({ origin: 'https://server-paltech.onrender.com'  }));
app.use(bodyParser.json());

// Routes
app.use('/contacts', contactRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
