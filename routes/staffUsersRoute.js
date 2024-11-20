const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const StaffUserCtrl = require('../controllers/ipmz_membership/staffUserController');

router.post('/signup', StaffUserCtrl.CreateUser);
router.post('/staff-login', StaffUserCtrl.StaffLoginUser);
router.post('/dev-staff-login', StaffUserCtrl.DevStaffLoginUser);
router.put('/staff-change-password/:username', StaffUserCtrl.StaffChangePassword);
router.get('/all-staff-users', StaffUserCtrl.GetAllUsers);
router.post('/forgot-password-staff', StaffUserCtrl.ForgotPasswordStaff);
router.post('/reset-password-staff/:email/:token', StaffUserCtrl.ResetPasswordStaff);
// router.post('/logout', StaffUserCtrl.Logout);

router.post('/auth-staff-refresh/:refresh', 
    auth.authAdminRole, 
    StaffUserCtrl.StaffRefreshToken
);

module.exports = router;