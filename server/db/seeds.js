use spooky;

db.dropDatabase();

// validation:
//
// db.createCollection("spookyPlaces", {
//   validator: {
//     bsonType: "object",
//     required: ["name", "locality", "price"],
//     properties: {
//       name: {
//         bsonType: "string",
//         description: "must be a string and is required"
//       },
//       locality: {
//         bsonType: "string",
//         description: "must be a string and is required"
//       },
//       price: {
//         bsonType: "float",
//         description: "must be a double and is required"
//       }
//     }
//   },
//   validationLevel: "strict",
//   validationAction: "error"
// });


db.spookyPlaces.insertMany([
    {
      name: "Crathes Castle",
      locality: "Banchory",
      location: {
        lat: 57.062265,
        long: -2.439708
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgURL: "https://www.visitscotland.com/wsimgs/Crathes_623569832.jpg",
      price: 25.00
    },
    {
      name: "Mary King's Close",
      locality: "Edinburgh",
      location: {
        lat: 55.950281,
        long: -3.190463
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgURL: "https://www.touristsecrets.com/wp-content/uploads/2019/07/3-18-1160x653.jpg",
      price: 150.00
    },
    {
      name: "Cawdor Castle",
      locality: "Cawdor",
      location: {
        lat: 57.524736,
        long: -3.926433
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgURL: "https://spookyscotland.net/wp-content/uploads/2018/02/cawdor-castle.jpg",
      price: 260.00
    }
]);
