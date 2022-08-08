const { getUsers, addUser, updateUser, deleteUser, search } = require('../controllers/userController');
const router = require('express').Router();

router.get('/users', getUsers);
router.get('/users/:_id', getUsers);
router.post('/users', addUser);
router.put('/users/:_id', updateUser);
router.delete('/users/:_id', deleteUser);

module.exports = router;