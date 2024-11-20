const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const SubmittedAssignmentsCtrl = require('../controllers/ipmz_membership/assignmentSubmissionController');

router.get('/submitted-assignments/:id',SubmittedAssignmentsCtrl.GetSubmittedAssignments);
router.get('/submitted-unmarked-assignments/:id',auth.authStudentRole, SubmittedAssignmentsCtrl.GetUnmarkedAssignments);
router.get('/assignment-next-reference',auth.authStudentRole, SubmittedAssignmentsCtrl.NextAssignmentRefNumber);
router.post('/upload-assignment/:membernumber/:subject/:question/',SubmittedAssignmentsCtrl.UploadSubmitAssignment);
router.get('/download-uploaded-assignment/:session/:subject/:question/:file',auth.authStudentRole, SubmittedAssignmentsCtrl.GetUploadedAssignment);
router.get('/download-uploaded-marked-assignment/:session/:subject/:question/:file',auth.authStudentRole, SubmittedAssignmentsCtrl.GetUploadedMarkedAssignment);
router.delete('/delete-assignment/:id/:subjectkey/:sessionnumber/:questionnumber/:file',auth.authStudentRole, SubmittedAssignmentsCtrl.DeleteAssignment);

module.exports = router;