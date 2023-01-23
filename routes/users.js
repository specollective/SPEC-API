const router = require('express').Router()
const usersController = require('../controllers/users-controller')

router.get('/', usersController.index)
router.post('/', usersController.post)
router.get('/:id', usersController.show)
router.put('/:id', usersController.put)

module.exports = router