const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.send(req.originalUrl);
});

module.exports = Router;