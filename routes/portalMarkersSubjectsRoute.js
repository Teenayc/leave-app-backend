const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const PortalMarkersCtrl = require('../controllers/ipmz_portal/portalMarkersSubjectsController');

router.get('/marker-subjects/:marker', auth.authFacilitatorRole, PortalMarkersCtrl.GetPortalMarkersSubjects);
router.get('/students-assignments/:subjectkey', auth.authFacilitatorRole, PortalMarkersCtrl.GetStudentAssignments);

router.post('/download-assignment-folder', auth.authFacilitatorRole, PortalMarkersCtrl.GetSubmittedAssignmentsFolder);
router.post('/download-assignments-byquestion', auth.authFacilitatorRole, PortalMarkersCtrl.GetSubmittedAssignmentsByQuestion);

router.post('/upload-marked-assignments-qone/:session/:subjectkey/:question', auth.authFacilitatorRole, PortalMarkersCtrl.UploadMarkedAssignmentsQone);
router.post('/upload-marked-assignments-qtwo/:session/:subjectkey/:question', auth.authFacilitatorRole, PortalMarkersCtrl.UploadMarkedAssignmentsQtwo);
router.post('/upload-marked-assignments-qthree/:session/:subjectkey/:question', auth.authFacilitatorRole, PortalMarkersCtrl.UploadMarkedAssignmentsQthree);
router.post('/upload-marked-assignments-qfour/:session/:subjectkey/:question', auth.authFacilitatorRole, PortalMarkersCtrl.UploadMarkedAssignmentsQfour);

router.put('/upload-marked-assignments-marks', auth.authFacilitatorRole, PortalMarkersCtrl.UploadMarkedAssignmentsMarks);
router.put('/update-marked-assignment-mark', auth.authFacilitatorRole, PortalMarkersCtrl.UpdateSingleMarkedAssignmentMark);
router.put('/send-assignments-toacademic', auth.authFacilitatorRole, PortalMarkersCtrl.SendAssignmentsMarksToAcademic);

module.exports = router;