const express = require('express');
const { verifyToken } = require('../middlewares/auth');
const router = express.Router();

// You can add routes for managing user profiles, following/unfollowing, etc.

export const userRoutes = router;