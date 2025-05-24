const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb');

//env
dotenv.config();

//databasecall
connectDb();


//object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/users', require('./routes/userRoutes'));

//ports
const PORT = process.env.PORT || 8080;

//server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});