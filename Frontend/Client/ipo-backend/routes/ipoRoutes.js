const express = require('express');
const router = express.Router();
const { getAllIPOs, getIPOStatistics, getDonutData, deleteIPO } = require('../controllers/IpoStatisticsController');
const IPO = require('../models/IPO');

// Fetch all IPOs for the table
router.get('/ipos', getAllIPOs);

// Fetch bubble chart data
router.get('/ipos/statistics', getIPOStatistics);

// Fetch donut chart data
router.get('/ipos/donut-data', getDonutData);

// Delete IPO by ID
router.delete('/ipos/:id', deleteIPO);

// Post a new IPO
router.post('/ipos', async (req, res) => {
  const { company, priceBand, open, close, issueSize, issueType, listingDate, status } = req.body;

  if (!company || !priceBand || !open || !close || !issueSize || !issueType || !listingDate || !status) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const ipo = new IPO({
    company,
    priceBand,
    open: new Date(open),
    close: new Date(close),
    issueSize,
    issueType,
    listingDate: new Date(listingDate),
    status,
  });

  try {
    const newIPO = await ipo.save();
    res.status(201).json(newIPO);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/ipos/:id', async (req, res) => {
  try {
    const ipo = await IPO.findById(req.params.id);
    if (!ipo) {
      return res.status(404).json({ message: 'IPO not found' });
    }

 
    ipo.company = req.body.company || ipo.company;
    ipo.priceBand = req.body.priceBand || ipo.priceBand;
    ipo.open = req.body.open ? new Date(req.body.open) : ipo.open;
    ipo.close = req.body.close ? new Date(req.body.close) : ipo.close;
    ipo.issueSize = req.body.issueSize || ipo.issueSize;
    ipo.issueType = req.body.issueType || ipo.issueType;
    ipo.listingDate = req.body.listingDate ? new Date(req.body.listingDate) : ipo.listingDate;
    ipo.status = req.body.status || ipo.status;

    const updatedIPO = await ipo.save();
    res.json(updatedIPO);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
