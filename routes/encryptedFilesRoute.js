const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const encryptedFilesCtrl = require('../controllers/ipmz_membership/encryptedFilesController');

router.post('/generate-signature-code/:username', encryptedFilesCtrl.GenerateFileCode);
// router.put('/resend-email-verification/:email', applicantCtrl.ResendVerifyEmailToken);
// router.post('/applicant-login', applicantCtrl.ApplicantLogin);
// router.post('/application-forgot-password/:natid', applicantCtrl.ApplicationForgotPassword);
// router.get('/verify-email/:id/:token', applicantCtrl.VerifyUserEmail);
// router.put('/update-applicant-personal-details/:applicant', applicantCtrl.UpdateUserDetails);

module.exports = router;