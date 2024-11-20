const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const BKCtrl = require('../controllers/ipmz_membership/invoicesBackupController');

// router.get('/bought-material/:id', auth.authStudentRole, EbraryCtrl.GetBoughtMaterial);
router.get('/invoices-backup', BKCtrl.GetMissingInvoices);
router.get('/invoices-backup/:id', BKCtrl.GetMissingInvoiceDocument);
router.get('/update-invoices-backup/:id', BKCtrl.UpdateMissingInvoiceOrderNumber);

module.exports = router;