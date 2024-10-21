const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.render('pages/index.ejs')
})

router.get('/about', function(req, res) {
  res.render('pages/about.ejs')
})

module.exports = router