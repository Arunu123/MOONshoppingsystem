const userService = require('./user.service');

class UserController {
    async signUp(req, res) {
        try {
            const userData = req.body;
            const user = await userService.createUser(userData);
            res.status(201).json({ message: 'User created successfully', user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = new UserController();
