const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userService = require('../user/user.service');

class AuthService {
    async signIn(email, password) {
        const user = await userService.getUserByEmail(email);

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
}

module.exports = new AuthService();
