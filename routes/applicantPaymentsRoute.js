const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const applicantPayCtrl = require('../controllers/ipmz_membership/applicantPaymentsController');

router.post('/applicant-payment-proof/:applicant', applicantPayCtrl.ApplicantPaymentsDetails);
router.get('/get-applicant-payments/:applicant', applicantPayCtrl.GetUserPayments);
router.delete('/delete-payment/:id/:applicant_number', applicantPayCtrl.DeletePayment);

module.exports = router;