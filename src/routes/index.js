const express = require('express')
const router = express.Router()

const errorHandler = require('../middlewares/errorHandler')

const personalController = require('../controllers/personal')
const skillsController = require('../controllers/skills')

router.get('/personal', personalController.get)
router.get('/skills', skillsController.get)

router.use(errorHandler)

module.exports = router
