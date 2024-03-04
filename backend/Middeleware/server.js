const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const { authenticate } = require('./middlewares/auth.middleware');

const app = express();

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Example of protected route
app.get('/api/profile', authenticate, (req, res) => {
    // You can access the user ID using req.userId
    res.json({ message: 'Protected route', userId: req.userId });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
