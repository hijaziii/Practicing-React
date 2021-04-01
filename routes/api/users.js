const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = process.env.NODE_ENV === 'production' || require('config');
const { check, validationResult } = require('express-validator');

// const User = require('../../models/User');
const db = require("../../models");
// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  check('email', 'Name is required').notEmpty(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    console.log(req.body)
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      console.log("error is empty");
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      //  username,
      email,
      password } = req.body;

    try {
      let user = await db.User.findOne({ email });

      if (user) {
        console.log("user already exists");
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new db.User({
        // username,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };


      jwt.sign(
        payload,
        process.env.jwtSecret || config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;