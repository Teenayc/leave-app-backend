const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const applicantExpCtrl = require('../controllers/ipmz_membership/applicantExperienceController');

router.post('/applicant-experience/:applicant', applicantExpCtrl.ApplicantExperienceDetails);
router.get('/get-applicant-experience/:applicant', applicantExpCtrl.GetUserExperience);
router.delete('/delete-experience/:id/:applicant_number', applicantExpCtrl.DeleteExperience);
router.put('/submit-experience-for-review/:applicant_number', applicantExpCtrl.ApplicantSubmitExpForReview);

module.exports = router;