// server/config/gridfs.js
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');

let gridFSBucket;

function initGridFS() {
  if (!gridFSBucket) {
    const db = mongoose.connection.db;
    gridFSBucket = new GridFSBucket(db, { bucketName: 'uploads' });
  }
  return gridFSBucket;
}

module.exports = { initGridFS };