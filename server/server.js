// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const helmet = require('helmet');
// const cors = require('cors');
// const morgan = require('morgan');
// const rateLimit = require('express-rate-limit');
// const connectDB = require('./config/db');
// const { notFound, errorHandler } = require('./middleware/errorHandler');

// const leadRoutes = require('./routes/leadRoutes');
// const newsletterRoutes = require('./routes/newsletterRoutes');
// const authRoutes = require('./routes/authRoutes');
// const dashboardRoutes = require('./routes/dashboardRoutes');
// const blogRoutes = require('./routes/blogRoutes');
// const productRoutes = require('./routes/productRoutes');
// const galleryRoutes = require('./routes/galleryRoutes');
// const testimonialRoutes = require('./routes/testimonialRoutes');
// const uploadRoutes = require('./routes/Uploadroutes');

// connectDB();

// const app = express();

// // ---- Security & core middleware ----
// // crossOriginResourcePolicy is relaxed because the React client runs on a
// // different origin (e.g. localhost:5173) and needs to load /uploads images
// // and call the API directly — this is intentional, not a hole.
// app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
// app.use(express.json({ limit: '1mb' }));
// app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));

// // ---- CORS Configuration ----
// const corsOptions = {
//   origin: [
//     'https://www.jkchaatcafe.com',
//     'https://jkchaatcafe.com',
//     'https://jk-chaat-cafe.vercel.app',
//     'http://localhost:5173'
//   ],
//   credentials: true,
//   optionsSuccessStatus: 200
// };

// // Also support dynamic origins from environment variable
// const allowedOrigins = (process.env.CLIENT_ORIGIN || '').split(',').map(o => o.trim()).filter(Boolean);

// // Merge both CORS configurations - use the explicit list first, then fallback to env
// const finalCorsOptions = {
//   origin: (origin, cb) => {
//     // Allow requests with no origin (like mobile apps or curl requests)
//     if (!origin) return cb(null, true);
    
//     // Check against explicit list first
//     if (corsOptions.origin.includes(origin)) {
//       return cb(null, true);
//     }
    
//     // Check against environment variable list
//     if (allowedOrigins.length > 0 && allowedOrigins.includes(origin)) {
//       return cb(null, true);
//     }
    
//     cb(new Error('Not allowed by CORS'));
//   },
//   credentials: true,
//   optionsSuccessStatus: 200
// };

// app.use(cors(finalCorsOptions));

// // Serve uploaded images (e.g. http://localhost:5000/uploads/169...-abcd.jpg)
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Rate limit: protects public lead-generation endpoints from spam/bot abuse
// const formLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 30,
//   message: { message: 'Too many submissions from this device. Please try again later.' },
// });
// app.use('/api/leads', formLimiter);
// app.use('/api/newsletter', formLimiter);

// // General API limiter
// app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, max: 300 }));

// // ---- Routes ----
// app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));
// app.use('/api/leads', leadRoutes);
// app.use('/api/newsletter', newsletterRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/blogs', blogRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/gallery', galleryRoutes);
// app.use('/api/testimonials', testimonialRoutes);
// app.use('/api/upload', uploadRoutes);

// app.use(notFound);
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`JK Chaat Cafe API running on port ${PORT}`));

require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const leadRoutes = require('./routes/leadRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const blogRoutes = require('./routes/blogRoutes');
const productRoutes = require('./routes/productRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const uploadRoutes = require('./routes/Uploadroutes');

// ✅ YEHS LINE ADD KARO - SITEMAP ROUTE
const sitemapRoutes = require('./routes/sitemapRoutes');

connectDB();

const app = express();

// ---- Security & core middleware ----
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));

// ---- CORS Configuration ----
const corsOptions = {
  origin: [
    'https://www.jkchaatcafe.com',
    'https://jkchaatcafe.com',
    'https://jk-chaat-cafe.vercel.app',
    'http://localhost:5173'
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

const allowedOrigins = (process.env.CLIENT_ORIGIN || '').split(',').map(o => o.trim()).filter(Boolean);

const finalCorsOptions = {
  origin: (origin, cb) => {
    if (!origin) return cb(null, true);
    if (corsOptions.origin.includes(origin)) {
      return cb(null, true);
    }
    if (allowedOrigins.length > 0 && allowedOrigins.includes(origin)) {
      return cb(null, true);
    }
    cb(new Error('Not allowed by CORS'));
  },
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(finalCorsOptions));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  message: { message: 'Too many submissions from this device. Please try again later.' },
});
app.use('/api/leads', formLimiter);
app.use('/api/newsletter', formLimiter);
app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, max: 300 }));

// ---- Routes ----

// ✅ YEHS LINE ADD KARO - SITEMAP ROUTE (SABSE PEHLE)
app.use('/', sitemapRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));
app.use('/api/leads', leadRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/products', productRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/upload', uploadRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`JK Chaat Cafe API running on port ${PORT}`));