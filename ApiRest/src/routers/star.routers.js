const express = require('express');
const router = express.Router();
const starCtrl = require('../controller/star.controller');

router.get('/profesionales', starCtrl.getAll);
router.get('/profesionales/:name/:surname', starCtrl.getByNameAndSurname);
router.post('/profesionales', starCtrl.postStar);
router.put('/profesionales/:name', starCtrl.putStar);
router.delete('/profesionales/:name', starCtrl.deleteStar);

module.exports = router;