const express = require('express');

const router = express.Router();

// Routes
const assignmentRoutes = require('./assignment.route');

router.use("/assignment", assignmentRoutes);

module.exports = router;