const express = require('express');
const router = express.Router();
const { check,  validationResult } = require('express-validator')

const Users = require('../models/User');

// @route   POST /api/users
// @desc    Register a user
// @access  Public
router.post('/', [
  check('name', 'Please add name').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters long').isLength({ min:6 })
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.send('passed');
});

module.exports = router;