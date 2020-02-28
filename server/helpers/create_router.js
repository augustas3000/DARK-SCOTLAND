const express = require('express');
const ObjectID = require('mongodb').ObjectID;


const createRouter = function(collection) {

  const router = express.Router();

  // index route
  router.get('/', (req, res) => {
    collection
    .find()
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
