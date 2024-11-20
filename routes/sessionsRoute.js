const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const SessionsCtrl = require('../controllers/ipmz_membership/sessionsController');

router.get('/current-session', SessionsCtrl.GetCurrentSession);
router.get('/current-session-assignments/:id', SessionsCtrl.GetPublishedAssignments);
router.get('/current-session-exams/:id', SessionsCtrl.GetPublishedExams);
router.get('/selected-session/:id', SessionsCtrl.GetSelectedSession);
router.get('/current-exam-letter', SessionsCtrl.GetPublishedExamLetter);

module.exports = router;