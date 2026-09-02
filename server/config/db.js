const mongoose = require('mongoose');
const { initGridFS } = require('./gridfs');

async function connectDB() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MONGO_URI is not set in .env');
    await mongoose.connect(uri);
    console.log('MongoDB connected:', mongoose.connection.host);
    
    // ✅ GridFS initialize karo
    initGridFS();
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;