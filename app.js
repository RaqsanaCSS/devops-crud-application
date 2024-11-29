const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.set('view engine', 'ejs');

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files
// Routes
app.use('/', userRoutes);

module.exports = app;