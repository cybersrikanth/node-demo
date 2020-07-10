require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { MongoDB_Connection } = require('./database/database');


const PORT = process.env.PORT

const app = express();
MongoDB_Connection();

app.use(express.json());
app.use(cors());

app.use(require('./router/mock.router'));

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running in PORT : ${PORT}`)
);