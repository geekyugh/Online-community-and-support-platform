const express = require('express');
const connectDB = require('./config/db');
const app = express();
const http = require('http');
const cors = require('cors');


const socketLogic = require('./routes/socket');
const server = http.createServer(app)
socketLogic(server);


// Connect to MongoDB
connectDB();

// Middleware
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});