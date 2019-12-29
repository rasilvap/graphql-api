const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();


const URL_MLAB = 'mongodb+srv://rasilvap:test123@cluster0-dp1cb.gcp.mongodb.net/gql-app?retryWrites=true&w=majority';
mongoose.connect(URL_MLAB , { useNewUrlParser: true, useUnifiedTopology:true });

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});