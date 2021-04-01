const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactsSchema = new Schema({
    contactInformation: { type: Object, required: false }
    // email: { type: String, required: false },
    // fullName: { type: String, required: false },
    // message: { type: String, required: false },

});

const Contact = mongoose.model("Contact", contactsSchema);

module.exports = Contact;
