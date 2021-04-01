const db = require("../models");

module.exports = {

    create: async (req, res) => {
        console.log();
        try {
            db.Order
                .create({
                    item: req.body
                })
                .then(dbModel => {
                    res.json(dbModel)
                })
                .catch(err => {
                    console.log(err)
                    res.status(422).json(err)
                });
        }
        catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }

    },

    //     update: function (req, res) {
    //         db.Order
    //             .findOneAndUpdate({ _id: req.params.id }, req.body)
    //             .then(dbModel => res.json({ results: dbModel }))
    //             .catch(err => res.status(422).json(err));
    //     },

    //     remove: function (req, res) {
    //         db.Order
    //             .findById({ _id: req.params.id })
    //             .then(dbModel => dbModel.remove())
    //             .then(dbModel => res.json({ results: dbModel }))
    //             .catch(err => res.status(422).json(err));
    //     }

};
