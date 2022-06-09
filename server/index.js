const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const path = require();

const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 4711;

const app = express();

// Connect to database
connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    //graphiql: process.env.NODE_ENV === 'development',
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 4711;

app.listen(port, console.log(`Server running on port ${port}`));
