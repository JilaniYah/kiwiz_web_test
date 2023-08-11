const express   = require('express');
const router    = express.Router();
const multer    = require('multer');

const reportController       = require('../controllers/ReportController');
const transactionsController = require('../controllers/TransactionsController');

router.get('/report',reportController.getReport);

const upload = multer();
router.post('/transactions',upload.single('data'),transactionsController.insertTransactions)

module.exports = router;