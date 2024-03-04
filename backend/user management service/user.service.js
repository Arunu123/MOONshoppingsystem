const User = require('./user.model');

class UserService {
    async createUser(userData) {
        return await User.create(userData);
    }

    async getUserByEmail(email) {
        return await User.findOne({ workEmail: email });
    }
}

module.exports = new UserService();
