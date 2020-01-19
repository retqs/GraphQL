const express = require('express');
const graphqlIHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://graph:6678951q@graphqltest-vftzm.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('database is working');
});

app.use(
  '/graphql',
  graphqlIHTTP({
    schema,
    graphiql: true
  })
);

app.listen(2000, () => {
  console.log('open');
});
