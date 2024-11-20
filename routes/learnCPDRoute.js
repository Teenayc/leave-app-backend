const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const learnCPDCtrl = require('../controllers/ipmz_membership/learnCPDController');

router.get('/all-cpd-learn', learnCPDCtrl.GetAllCPDLearns);

module.exports = router;
