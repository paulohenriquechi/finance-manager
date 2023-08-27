const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => res.status(200).send({message: 'Server Working'}));

app.listen(port, () => console.log(`Running on ${port} port`));

module.exports = app;