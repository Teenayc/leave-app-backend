const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const ExamRegModulesCtrl = require('../controllers/ipmz_membership/examRegistrationModulesController');

router.get('/student-exam-results/:id',ExamRegModulesCtrl.GetStudentModuleResults);
router.get('/student-exam-results-session/:id/:sessionnumber',ExamRegModulesCtrl.GetStudentModuleSessionResults);
router.put('/update-exam-results-session',auth.authStudentRole, ExamRegModulesCtrl.ImportExcelExamBackup);
router.put('/upload-markers-exam-marks', auth.authFacilitatorRole, ExamRegModulesCtrl.MarkerExamUpload);
router.put('/upload-moderator-exam-marks', auth.authFacilitatorRole, ExamRegModulesCtrl.ModeratorExamUpload);
router.get('/markers-exam-list/:module', auth.authFacilitatorRole, ExamRegModulesCtrl.GetMarkersExamList);
router.get('/exam-centers',auth.authStudentRole, ExamRegModulesCtrl.GetExamCenters);
router.post('/create-exam-letter-draft/:id',auth.authStudentRole, ExamRegModulesCtrl.CreateExamLetterDraft);
router.get('/exam-letter-modules/:id/:session', ExamRegModulesCtrl.ExamLetterModules);
router.get('/current-exam-letter/:id/:session', ExamRegModulesCtrl.EntryNumberQRCode);
router.get('/exam-results-qr/:id/:session', ExamRegModulesCtrl.ExamsQRCode);
router.get('/verify-exam-letter/:cursession/:center/:number/:key', ExamRegModulesCtrl.GetExamLetterDetails);
router.get('/verify-exam-results/:cursession/:center/:number/:key', ExamRegModulesCtrl.GetExamResultsQRDetails);

router.get('/students-examinations/:subjectkey',auth.authFacilitatorRole, ExamRegModulesCtrl.GetStudentsExaminations);
router.put('/update-marked-exam-mark', auth.authFacilitatorRole, ExamRegModulesCtrl.UpdateSingleMarkedExamMark);
router.put('/update-single-moderator-exam-mark', auth.authFacilitatorRole, ExamRegModulesCtrl.UpdateSingleModeratorExamMark);
router.put('/upload-marked-exam-marks', auth.authFacilitatorRole, ExamRegModulesCtrl.UploadMarkedExamMarks);
router.put('/upload-marked-moderated-marks', auth.authFacilitatorRole, ExamRegModulesCtrl.UploadMarkedModeratorMarks);

router.get('/exam-letter-module-draft/:id/:session',ExamRegModulesCtrl.GetExamLetterModules);
router.put('/remove-module-from-exam-letter/:id/:session/:module',ExamRegModulesCtrl.RemoveModuleFromExamLetter);
router.put('/import-phone-numbers', ExamRegModulesCtrl.ImportPhoneNumbers);


module.exports = router;
