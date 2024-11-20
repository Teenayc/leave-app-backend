const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const ConventionCtrl = require('../controllers/ipmz_membership/annualConventionController');

router.post('/search-delegate/:id', ConventionCtrl.SearchDelegate);
router.post('/create-session-a-seat/:venue/:session/:event', ConventionCtrl.CreateSessionASeat);
router.post('/create-session-b-seat/:venue/:session/:event', ConventionCtrl.CreateSessionBSeat);
router.post('/create-session-c-seat/:venue/:session/:event', ConventionCtrl.CreateSessionCSeat);
router.post('/create-session-d-seat/:venue/:session/:event', ConventionCtrl.CreateSessionDSeat);

module.exports = router;