const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware');
const { login } = require('../controllers/authController');

router.post('/login', login);
router.get('/profile', authMiddleware, (req, res) => {
    res.json({
        msg: "protected route working",
         user: req.user
        });
}
);
module.exports = router;