const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts');
const authMiddleware = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/webdev', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Routes
app.use('/posts', authMiddleware, postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
