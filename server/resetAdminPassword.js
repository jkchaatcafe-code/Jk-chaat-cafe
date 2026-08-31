// One-off utility: resets the admin account's password to whatever is
// currently set in .env, even if the account already exists.
// Run with: node resetAdminPassword.js
require('dotenv').config();
const connectDB = require('./config/db');
const Admin = require('./models/Admin');

async function run() {
  await connectDB();

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error('ADMIN_EMAIL and ADMIN_PASSWORD must both be set in .env');
    process.exit(1);
  }

  const admin = await Admin.findOne({ email });

  if (!admin) {
    console.log(`No admin found with email ${email} — creating a new one instead.`);
    await Admin.create({ name: 'JK Chaat Cafe Admin', email, password, role: 'superadmin' });
    console.log('Admin account created.');
  } else {
    admin.password = password; // pre-save hook in the Admin model re-hashes this
    await admin.save();
    console.log(`Password reset for ${email}.`);
  }

  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
