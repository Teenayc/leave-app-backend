const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const UserCtrl = require('../controllers/ipmz_portal/userController');

router.post('/create-account', UserCtrl.CreateUser);
router.post('/default-credentials',UserCtrl.UserDefaultCredentials)
router.post('/login', UserCtrl.LoginUser);
router.post('/dev-login', UserCtrl.DevLoginUser);
router.post('/login-marker', UserCtrl.LoginMarker);
router.post('/default-marker-credentials',UserCtrl.SendMarkerCredentials)

router.post('/auth-refresh/:refresh', 
    auth.authFacilitatorStudentRole, 
    UserCtrl.RefreshToken
);

router.get('/revoke-refresh', UserCtrl.RevokeRefreshToken);
router.get('/user', auth.authUser, UserCtrl.GetUser);
router.get('/all-portal-users', UserCtrl.GetAllUsers);
router.put('/change-password', UserCtrl.ChangePassword);
router.post('/forgot-password-students', UserCtrl.ForgotPasswordStudents);
router.post('/reset-password/:id/:token', UserCtrl.ResetPassword);
router.post('/logout', UserCtrl.Logout);
router.put('/resend-email-verification/:email', UserCtrl.ResendVerifyEmailToken);
router.get('/verify-email/:id/:token', UserCtrl.VerifyUserEmail);
router.post('/generate-user-qrcode', UserCtrl.GenerateQRCode);

module.exports = router;