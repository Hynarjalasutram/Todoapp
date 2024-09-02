const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/todoapp", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {console.log('MongoDB connected')})
  .catch(err => {console.error(err)});

// Routes
app.use('/tasks', taskRoutes);

// Server start
app.listen(5000);
