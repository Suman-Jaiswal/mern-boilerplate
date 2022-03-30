import express from 'express'
import UserController from '../controllers/user_controller.js'
const router = express.Router()

const userController = new UserController()

// express router method to create route for getting all users
router.route('/').get(userController.getUsers)

// express router method to create route for getting users by id
router.route('/:id').get(userController.getUserById)

export default router
