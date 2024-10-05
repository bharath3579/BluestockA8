const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const ipoRoutes = require('./routes/ipoRoutes');
const cors = require('cors');

dotenv.config();

// Connect to the database
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Use IPO routes
app.use('/api', ipoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
