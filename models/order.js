const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    customerId: { type: String, required: false },
    InvoiceId: { type: String, required: false },
    item: { type: Object, required: false },
    profile: { type: Object, required: false },
    date: { type: String, required: false }

});

const Order = mongoose.model("Order", ordersSchema);

module.exports = Order;
