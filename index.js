const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const leaseRoutes = require('./routes/leaseRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Routes
app.use('/auth', authRoutes);  // Directly use the imported authRoutes
app.use('/properties', propertyRoutes);  // Assuming you have propertyRoutes imported correctly
app.use('/leases', leaseRoutes);  // Assuming you have leaseRoutes imported correctly

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));