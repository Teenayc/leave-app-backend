const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const contributionCtrl = require('../controllers/ipmz_membership/contributionsController');

router.post('/create-contribution-speaker', contributionCtrl.CreateSpeakerContribution);
router.post('/create-contribution-manpower', contributionCtrl.CreateManpowerContribution);

module.exports = router;