const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./api');


//configuration
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send("Kindly Put an API before any route");
})

app.listen(3000, () => {
    console.log("App started listning to localhost:3000");
})