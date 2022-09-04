const Router = require('express')
const router = new Router()

const userController = require('../contoller/_user.controller')

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.destroyUser)

module.exports = router