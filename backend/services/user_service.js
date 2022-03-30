import User from "../models/user_model.js";

class UserService {

    constructor() {
        this.user = User;
    }

    async findAllUser() {
        const users = await this.user.find();
        return users;
    }

}
export default UserService