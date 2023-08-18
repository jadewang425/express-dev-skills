const express = require('express');
const router = express.Router();

const skillsCtrl = require('../controllers/skills')

/* GET /skills */
router.get('/', skillsCtrl.index);

router.get('/:skill', skillsCtrl.show)

module.exports = router;
