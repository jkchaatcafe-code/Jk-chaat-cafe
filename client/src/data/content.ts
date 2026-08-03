export type MenuItem = { name: string; desc: string; cat: string; tags: string[] };
export const menuItems: MenuItem[] = [
  { name: 'Masala Chai', desc: 'Our signature spiced tea blend, brewed the traditional way.', cat: 'beverages', tags: ['Beverage', 'Signature'] },
  { name: 'Cold Coffee', desc: 'Rich, chilled coffee made from freshly roasted beans.', cat: 'beverages', tags: ['Beverage', 'Chilled'] },
  { name: 'Classic Pani Puri', desc: 'Crisp puris with tangy tamarind and mint water.', cat: 'chaat', tags: ['Chaat', 'Bestseller'] },
  { name: 'Sev Puri Chaat', desc: 'Layered chaat topped with sev, chutneys and spices.', cat: 'chaat', tags: ['Chaat'] },
  { name: 'Cheese Burger', desc: 'Grilled patty with melted cheese and house sauce.', cat: 'fastfood', tags: ['Fast Food'] },
  { name: 'Farmhouse Pizza', desc: 'Loaded veggie pizza on a crisp thin base.', cat: 'fastfood', tags: ['Fast Food'] },
  { name: 'Peri Peri Fries', desc: 'Crispy fries tossed in peri peri masala.', cat: 'snacks', tags: ['Snacks', 'Bestseller'] },
  { name: 'Veg Loaded Sandwich', desc: 'Grilled sandwich with fresh vegetables and cheese.', cat: 'snacks', tags: ['Snacks'] },
  { name: 'Paneer Roll', desc: 'Spiced paneer wrapped in a soft rumali roti.', cat: 'rolls', tags: ['Rolls'] },
  { name: 'Chowmein', desc: 'Wok-tossed noodles with vegetables and signature sauces.', cat: 'snacks', tags: ['Snacks'] },
  { name: 'Oreo Milkshake', desc: 'Thick, creamy shake blended with Oreo cookies.', cat: 'beverages', tags: ['Beverage'] },
  { name: 'Virgin Mojito', desc: 'Refreshing minty mocktail, served chilled.', cat: 'beverages', tags: ['Mocktail'] },
];

export type GalleryPic = { title: string; cat: string; height: number };
export const galleryItems: GalleryPic[] = [
  { title: 'Cafe Interior — Indore Outlet', cat: 'interior', height: 220 },
  { title: 'Chaat Counter Setup', cat: 'interior', height: 180 },
  { title: 'Fresh Pani Puri Station', cat: 'food', height: 200 },
  { title: 'Coffee Bar Equipment', cat: 'equipment', height: 240 },
  { title: 'Franchise Partner Training Day', cat: 'training', height: 190 },
  { title: 'Grand Launch — Bhopal', cat: 'interior', height: 210 },
  { title: 'Signature Masala Packaging', cat: 'food', height: 180 },
  { title: 'Kitchen Equipment Install', cat: 'equipment', height: 230 },
  { title: 'Staff Uniform & Branding', cat: 'training', height: 200 },
  { title: 'Outdoor Seating Setup', cat: 'interior', height: 220 },
  { title: 'Menu Board Design', cat: 'food', height: 190 },
  { title: 'New Partner Onboarding', cat: 'training', height: 210 },
];

export type BlogPost = { cat: string; title: string; excerpt: string; date: string; read: string };
export const blogPosts: BlogPost[] = [
  { cat: 'Franchise Guide', title: 'How Much Does It Really Cost to Open a Cafe in India?', excerpt: 'A realistic breakdown of setup, equipment, staffing and monthly running costs.', date: '12 Jul 2026', read: '6 min' },
  { cat: 'Business Tips', title: '5 Signs Your City Needs a Chaat Cafe', excerpt: 'Footfall, competition and local demand signals that indicate a strong location.', date: '02 Jul 2026', read: '4 min' },
  { cat: 'Partner Story', title: 'From Software Job to Cafe Owner: Rohit\u2019s Story', excerpt: 'How one of our Indore partners made the switch and broke even in 5 months.', date: '24 Jun 2026', read: '5 min' },
  { cat: 'Franchise Guide', title: 'Franchise vs. Starting From Scratch: What\u2019s Actually Cheaper?', excerpt: 'Comparing hidden costs of building a cafe brand alone versus franchising.', date: '15 Jun 2026', read: '7 min' },
  { cat: 'Operations', title: 'Staff Training 101: What We Cover Before Launch Day', excerpt: 'A look inside our 7-day training program for new franchise teams.', date: '05 Jun 2026', read: '5 min' },
  { cat: 'Marketing', title: 'How We Fill Tables in the First 30 Days', excerpt: 'The exact launch marketing playbook we run for every new outlet.', date: '28 May 2026', read: '6 min' },
];

export type Testimonial = { name: string; city: string; quote: string };
export const testimonials: Testimonial[] = [
  { name: 'Rohit Sharma', city: 'Indore', quote: 'We had zero restaurant experience. JK Chaat Cafe planned the entire outlet and trained our staff — we broke even faster than expected.' },
  { name: 'Priya Mehta', city: 'Bhopal', quote: 'The masala and menu consistency is what our customers keep coming back for. Support after launch has been just as strong.' },
  { name: 'Anil Kumar', city: 'Nagpur', quote: 'From site visit to opening day took under eight weeks. The launch weekend marketing filled the cafe from day one.' },
  { name: 'Sneha Verma', city: 'Ujjain', quote: 'Business guidance didn\u2019t stop after launch — they still help us plan seasonal offers and manage costs a year in.' },
];
