const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const BillerCtrl = require('../controllers/ipmz_membership/billercodeController');
const basicAuthentication = require('../shared/basicAuthentication');

router.get('/get-member/:id',basicAuthentication, BillerCtrl.getMemberDetails,);
router.post('/make-payment', basicAuthentication, BillerCtrl.makePayment);
router.post('/payment-reversal', BillerCtrl.makePaymentReversal);
router.get('/query-transaction/:id', BillerCtrl.getPaymentDetails);

module.exports = router;