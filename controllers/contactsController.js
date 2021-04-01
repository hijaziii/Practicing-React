const db = require("../models");

module.exports = {

    create: async (req, res) => {
        console.log();
        try {
            db.Contact
                .create({
                    contactInformation: req.body
                    // email: req.body["Email Address"],
                    // fullName: req.body["Full Name"],
                    // message: req.body["Message"]
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
};