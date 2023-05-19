require('dotenv').config();
const express = require('express');
const router = require('./routes');
const dbConnection = require('./confiq/db');
const app = express();

app.use(express.json());
app.use(router);

dbConnection();


app.listen(8000);