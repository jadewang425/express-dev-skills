const express = require('express');
const router = express.Router();

const skillsCtrl = require('../controllers/skills')

/* GET /skills */
router.get('/', skillsCtrl.index);
// need to define before show, so show will include the new skills
router.get('/new', skillsCtrl.new)

router.get('/:skill', skillsCtrl.show)

router.post('/', skillsCtrl.create)

router.delete('/:skill', skillsCtrl.delete)

module.exports = router;
