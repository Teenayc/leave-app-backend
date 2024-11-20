const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const AwardCtrl = require('../controllers/ipmz_membership/hcpAwardsController');

router.post('/create-new-award', AwardCtrl.CreateAward);
router.get('/award-details/:award', AwardCtrl.GenerateAwardQRCode);
router.get('/get-award-details/:award', AwardCtrl.GetAwardDetails);
router.get('/template', AwardCtrl.GetTemplate);
router.post('/add-nomination/:code', AwardCtrl.NominateSomeone);
router.post('/upload-nomination-doc/:number/:email/:code', AwardCtrl.UploadNominationDocument);

module.exports = router;