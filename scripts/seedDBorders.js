const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/lunde-water-two"
);

const orderSeed = [
    {
        email:
            "fake@fake.com",

    },

];

db.Order
    .remove({})
    .then(() => db.Order.collection.insertMany(orderSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
