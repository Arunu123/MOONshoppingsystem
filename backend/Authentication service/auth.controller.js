const authService = require('./auth.service');

class AuthController {
    async signIn(req, res) {
        try {
            const { workEmail, password } = req.body;
            const token = await authService.signIn(workEmail, password);
            res.status(200).json({ token });
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: error.message });
        }
    }
}

module.exports = new AuthController();
