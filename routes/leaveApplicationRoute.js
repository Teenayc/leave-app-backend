const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const applicationCtrl = require('../controllers/leave_applications/leaveApplicationController');

router.post('/create-user', applicationCtrl.CreateUser);
router.post('/user-login', applicationCtrl.LoginUser);
router.put('/update-user-role/:id', applicationCtrl.AssignUserRole);
router.get('/get-leave-application', applicationCtrl.LeaveApplicationByEmployee);
router.put('/update-leave-application', applicationCtrl.updateLeaveApplicationByEmployee);
router.post('/auth-refresh/:refresh', applicationCtrl.RefreshToken);

module.exports = router;