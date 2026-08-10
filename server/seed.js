require('dotenv').config();
const connectDB = require('./config/db');
const Admin = require('./models/Admin');
const Testimonial = require('./models/Testimonial');
const Product = require('./models/Product');

async function seed() {
  await connectDB();

  const email = process.env.ADMIN_EMAIL || 'admin@jkchaatcafe.com';
  const existing = await Admin.findOne({ email });
  if (!existing) {
    await Admin.create({
      name: 'JK Chaat Cafe Admin',
      email,
      password: process.env.ADMIN_PASSWORD || 'Adminjk#2344',
      role: 'superadmin',
    });
    console.log(`Admin account created: ${email}`);
  } else {
    console.log('Admin account already exists, skipping.');
  }

  const testimonialCount = await Testimonial.countDocuments();
  if (testimonialCount === 0) {
    await Testimonial.insertMany([
      { name: 'Rohit Sharma', city: 'Indore', quote: 'We had zero restaurant experience. JK Chaat Cafe planned the entire outlet and trained our staff.', rating: 5 },
      { name: 'Priya Mehta', city: 'Bhopal', quote: 'The masala and menu consistency is what our customers keep coming back for.', rating: 5 },
      { name: 'Anil Kumar', city: 'Nagpur', quote: 'From site visit to opening day took under eight weeks.', rating: 5 },
    ]);
    console.log('Sample testimonials seeded.');
  }

  const productCount = await Product.countDocuments();
  if (productCount === 0) {
    await Product.insertMany([
      { name: 'Masala Chai', category: 'beverages', description: 'Our signature spiced tea blend.', tags: ['Beverage', 'Signature'] },
      { name: 'Classic Pani Puri', category: 'chaat', description: 'Crisp puris with tangy tamarind and mint water.', tags: ['Chaat', 'Bestseller'] },
      { name: 'Cheese Burger', category: 'fastfood', description: 'Grilled patty with melted cheese and house sauce.', tags: ['Fast Food'] },
      { name: 'Peri Peri Fries', category: 'snacks', description: 'Crispy fries tossed in peri peri masala.', tags: ['Snacks', 'Bestseller'] },
    ]);
    console.log('Sample products seeded.');
  }

  console.log('Seeding complete.');
  process.exit(0);
}

seed().catch((err) => { console.error(err); process.exit(1); });
