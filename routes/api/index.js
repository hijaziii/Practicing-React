const router = require('express').Router();
const orderRoutes = require('./orders');
const contactRoutes = require('./contacts');
const path = require('path');
const authRoutes = require('./auth');
const userRoutes = require('./users');

router.use('/orders', orderRoutes);
router.use('/contacts', contactRoutes);
router.use('/auth', authRoutes);
router.use('/users', userRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
