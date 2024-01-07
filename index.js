const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const connectDB = require('./config/dbConnect.js');
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
    res.send("Kindly Put an API/Version : v1 || v2 ... before any route");
})

async function startServer() {
    const connection = await connectDB();
    if(!connection) throw new Error("Error connecting to DB , " + JSON.stringify(connection));

    console.log("Connected to DB");
    app.listen(process.env.PORT || 3000, () => {
        console.log("App started listning to localhost:"  + process.env.PORT || 3000);
    })
}

try {
    startServer()
} catch (error) {
    console.log(error);
}