const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const SymposiumCtrl = require('../controllers/ipmz_membership/hrSymposiumController');

router.post('/search-delegate/:id', SymposiumCtrl.SearchDelegate);
router.post('/create-symposium-sessiona-seat/:venue/:session/:event', SymposiumCtrl.CreateSessionASeat);
router.post('/create-symposium-sessionb-seat/:venue/:session/:event', SymposiumCtrl.CreateSessionBSeat);
router.post('/create-symposium-sessionc-seat/:venue/:session/:event', SymposiumCtrl.CreateSessionCSeat);
router.get('/verify-symposium/:ticket', SymposiumCtrl.GetDelegateDetails);

module.exports = router;