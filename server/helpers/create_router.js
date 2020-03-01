const express = require('express');
const ObjectID = require('mongodb').ObjectID;


const createRouter = function(collection) {

  const router = express.Router();

  // index route
  router.get('/', (req, res) => {

    // logs query data
    // mongodb query methods: .find({query obj})
    // exclude special field names from query string before filtering

    // 1.create a shallow copy of the query object
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    const queryObj = {...req.query};
    //
    excludedFields.forEach(el => delete queryObj[el]);


    // advanced filtering:
    let queryStr = JSON.stringify(queryObj);

    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);


    // console.log(JSON.parse(queryStr));

    const queryO = JSON.parse(queryStr);

    if (queryO.price) {
      if (typeof queryO.price === 'string') {
        queryO.price = parseFloat(queryO.price);
      } else if (typeof queryO.price === 'object') {


        for (let k in queryO.price) {
          // console.log(queryO.price[k]);
          queryO.price[k] = parseFloat(queryO.price[k]);
          // console.log(queryO.price[k]);
        }

        // console.log(values);
        // console.log('♟', queryO.price);

      }

    }


      // price: { '$gte': 0, '$lte': 40 } }

    // console.log(queryO.price);
    // console.log(typeof queryO.price);
    // console.log(req.query, queryObj);

    // filter object in mongodb:
    // {price_range: { $gte: 100} }

    // queryObj

    // const sampleQuery = { price: { $gte: 20.00 } }
    // JSON.parse(queryStr)

    // console.log(req.query);
    // console.log('collection: 🎧', collection);

    // console.log(collection.find( req.query ));

    // { price: { '$gte': '20' } }

    collection
    .find(  queryO  )
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error('ERROR 💣:', err);
      res.status(500);
      res.json({ status: 500, error: err});
    });
  });


  router.get('/:id', (req, res) => {
  const id = req.params.id;
  collection
  .findOne({_id: ObjectID(id)}) //mongodb method?
  .then((doc) => res.json(doc))
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err});
  })
});

//Create route
router.post('/', (req, res) => {

  // validation

  const newData = req.body;

  collection
  .insertOne(newData)
  .then((result) => res.json(result.ops[0]))
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err});
  })
});

//Delete route
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  collection
  .deleteOne({_id: ObjectID(id)})
  .then(result => {
    res.json(result)
  })
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err});
  });
})

//Update route
router.put('/:id', (req, res) => {
  console.log(req);
  const id = req.params.id;
  const updatedData = req.body;
  collection
  .findOneAndUpdate(
    {_id: ObjectID(id)},
    {$set: updatedData},
    {returnOriginal: false}
  )
  .then((result) => {
    res.json(result.value)
  })
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err});
  });
})




  return router;
}

module.exports = createRouter;
