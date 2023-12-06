const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/TakmilTest');

app.use('/api', schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



