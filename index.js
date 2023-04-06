const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const mongoString = 'mongodb://localhost:27017/testar';
const cors = require('cors');
require('dotenv').config();

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const uri = process.env.ATLAS_URI;

const connectDB = async () => {
  mongoose.connect(uri, { useNewUrlParser: true });
};

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

// push
const app = express();

app.use(express.json());

app.use('/api', cors(), routes);

app.use(cors(corsOptions)); // Use this after the variable declaration

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Started at ${3000}`);
  });
});
