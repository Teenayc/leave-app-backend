const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const BillerUserCtrl = require('../controllers/ipmz_membership/billercodeUsersController');

router.get('/get-user/:id', BillerUserCtrl.getBillercodeUser);
router.post('/create-user', BillerUserCtrl.createBillercodeUser);
router.put('/change-mode-status', BillerUserCtrl.changeModeStatus);
//router.get('/query-transaction/:id', BillerUserCtrl.getPaymentDetails);

module.exports = router;