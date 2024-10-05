const IPO = require('../models/IPO');

// Get all IPO data for the table
const getAllIPOs = async (req, res) => {
  try {
    const ipos = await IPO.find();
    res.json(ipos);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching IPOs', error: err.message });
  }
};

// Get bubble chart data (Total IPO, IPO Gain, IPO Loss)
const getIPOStatistics = async (req, res) => {
  try {
    const totalIPO = await IPO.countDocuments();
    const ipoGain = await IPO.countDocuments({ status: 'Gain' });
    const ipoLoss = await IPO.countDocuments({ status: 'Loss' });

    const data = { totalIPO, ipoGain, ipoLoss };
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching IPO statistics', error: err.message });
  }
};

// Get donut chart data (Upcoming, New Listed, Ongoing)
const getDonutData = async (req, res) => {
  try {
    const upcoming = await IPO.countDocuments({ status: 'Upcoming' });
    const newListed = await IPO.countDocuments({ status: 'New Listed' });
    const ongoing = await IPO.countDocuments({ status: 'Ongoing' });

    const data = { upcoming, newListed, ongoing };
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching donut data', error: err.message });
  }
};

// Delete an IPO by ID
const deleteIPO = async (req, res) => {
  try {
    const ipo = await IPO.findByIdAndDelete(req.params.id);
    if (!ipo) {
      return res.status(404).json({ message: 'IPO not found' });
    }
    res.json({ message: 'IPO deleted successfully', ipo });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting IPO', error: err.message });
  }
};

module.exports = { getAllIPOs, getIPOStatistics, getDonutData, deleteIPO };
