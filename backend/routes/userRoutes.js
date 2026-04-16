const express = require('express');
const router = express.Router();

const { createUser }  = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');
const { roleMiddleware } = require('../middleware/roleMiddleware');
const { getAllUsers } = require('../controllers/userController');
const { updateUser } = require('../controllers/userController');
const { deleteUser } = require('../controllers/userController');

router.post('/users',
    authMiddleware,
    roleMiddleware("admin"),
    createUser
);
router.get('/users',
     authMiddleware,
     roleMiddleware("admin"),
     getAllUsers
    );


    router.put(
        '/users/:id',
        authMiddleware,
        roleMiddleware("admin"),
        updateUser
    );

    router.delete(
  "/users/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteUser
);
module.exports = router;