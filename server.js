const express = require('express');

const users = require('./routes/users');

const PORT = 5000;

const app = express();

// Body parser
app.use(express.json());

// Apply routes
app.use('/api/users', users);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));