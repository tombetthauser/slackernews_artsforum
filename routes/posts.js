var express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
var router = express.Router();

/* GET home page. */
router.get('/', asyncHandler(async (req, res) => {
  const posts = await db.Post.findAll({ include: ["user"], order: [['createdAt', 'DESC']] });
  res.render('index', { posts });
}));

router.get('/new', asyncHandler(async (req, res) => {
  // const posts = await db.Post.findAll({ include: ["user"], order: [['createdAt', 'DESC']] });
  res.render('posts-add');
}));

module.exports = router;
