const bodyParser = require('body-parser');
const users = require('./usersRoute');
const items = require('./itemsRoute');
module.exports = app => {
    app.use(bodyParser.json());
    app.use(users)
    app.use(items)
}