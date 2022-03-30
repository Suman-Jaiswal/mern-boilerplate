import User from '../models/user_model.js'
import asyncHandler from 'express-async-handler'
import UserService from '../services/user_service.js'

class UserController {

    constructor() {
        this.userService = new UserService()
    }

    getUsers = asyncHandler(async (req, res) => {
        const users = await this.userService.findAllUser();
        res.json(users)
    })

    getUserById = asyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id)
        res.json(user)
    })

}

export default UserController



