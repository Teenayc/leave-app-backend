const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const applicantDetailsCtrl = require('../controllers/ipmz_membership/applicantsDetailsController');

//router.post('/applicant-qualification/:applicant', applicantDetailsCtrl.ResendVerifyEmailToken);
// router.post('/applicant-login', applicantCtrl.ApplicantLogin);
// router.post('/application-forgot-password/:natid', applicantCtrl.ApplicationForgotPassword);
// router.get('/verify-email/:id/:token', applicantCtrl.VerifyUserEmail);
// router.put('/update-applicant-personal-details/:applicant', applicantCtrl.UpdateUserDetails);
// router.get('/user-details/:applicant', applicantCtrl.GetUserDetails);
// router.put('/clear-user-details/:applicant', applicantCtrl.ClearUserDetails);

module.exports = router;