const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const applicantReqCtrl = require('../controllers/ipmz_membership/applicantQualificationsController');

router.post('/applicant-natid/:applicant', applicantReqCtrl.ApplicantNatidDetails);
router.post('/applicant-olevel/:applicant', applicantReqCtrl.ApplicantReqOlevel);
router.post('/applicant-alevel/:applicant', applicantReqCtrl.ApplicantReqAlevel);
router.post('/applicant-diploma/:applicant', applicantReqCtrl.ApplicantReqDiploma);
router.post('/applicant-degree/:applicant', applicantReqCtrl.ApplicantReqDegree);
router.post('/applicant-certificate/:applicant', applicantReqCtrl.ApplicantReqCertificate);
router.put('/applicant-submit-for-review/:applicant', applicantReqCtrl.ApplicantSubmitForReview);

router.get('/get-applicant-qualifications/:applicant', applicantReqCtrl.GetUserQualifications);
router.delete('/delete-qualification/:id/:applicant_number', applicantReqCtrl.DeleteQualification);
// router.post('/application-forgot-password/:natid', applicantCtrl.ApplicationForgotPassword);
// router.get('/verify-email/:id/:token', applicantCtrl.VerifyUserEmail);
// router.put('/update-applicant-personal-details/:applicant', applicantCtrl.UpdateUserDetails);
// router.get('/user-details/:applicant', applicantCtrl.GetUserDetails);
// router.put('/clear-user-details/:applicant', applicantCtrl.ClearUserDetails);

module.exports = router;