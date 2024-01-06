const glob = require('glob');
const express = require('express');
const Router = express.Router();

const routes = glob.sync("api/*/routes/*.js");
const exportable = {};

routes.forEach((item) => {
    let [ filename ] = item.split('.');
    filename = filename.split('/').filter((path) => path != "routes" && path != "api").join("/");
    exportable[filename] = require(`../${item}`);
});

for(_route in exportable) {
    Router.use(`/${_route}`, exportable[_route]);
}

module.exports = Router;