const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const ExamRegCtrl = require('../controllers/ipmz_membership/examRegistrationController');

router.get('/exam-registration/:id/:sessionname',auth.authStudentRole, ExamRegCtrl.GetExamRegistrationSessionKey);

module.exports = router;