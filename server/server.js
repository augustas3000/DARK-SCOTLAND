const express = require('express');
const app = express();

const cors = require('cors');
const parser = require('body-parser');

// const morgan = require('morgan');

const MongoClient = require('mongodb').MongoClient;


const createRouter = require('./helpers/create_router.js');
const port = 3000;


app.use(cors());
app.use(parser.json());


MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('spooky');
  const spookyPlacesCollection = db.collection('spookyPlaces');
  // route handlers
  const spookyPlacesRouter = createRouter(spookyPlacesCollection);
  app.use('/api/spooky-places', spookyPlacesRouter)

  // add a different router? ask team. first declare, then app.use - use middleware for specific route
})
.catch(console.error);

app.listen(port, function() {
  console.log(`Listening on port: ${this.address().port}`);
});
