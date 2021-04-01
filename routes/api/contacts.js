const router = require("express").Router();
const contactsController = require("../../controllers/contactsController");

// Matches with "/api/orders"
router.route("/")
    // .get(ordersController.findAll)
    .post(contactsController.create);

// router
//     .route("/:id")
//     .get(ordersController.findById)
//     .put(ordersController.update)
//     .delete(ordersController.remove);

// router
//     .route("/customer/:id")
//     .get(ordersController.findByCustomerId)

module.exports = router;
