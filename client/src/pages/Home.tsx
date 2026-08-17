import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import { submitLead } from '../api/client';

// ---- Local Images for Slider ----
import hero1 from '../assets/img/homepagehero1.jpeg';
import hero2 from '../assets/img/homepagehero2.jpeg';
import hero3 from '../assets/img/homepagehero3.jpeg';
import hero4 from '../assets/img/homepagehero4.jpeg';
import about from '../assets/img/homepageabout.jpeg';

const HERO_IMAGES = [hero1, hero2, hero3, hero4];

// Menu Items - Real Menu
const menuItems = {
  'Pani Puri': ['Regular Pani Puri(6 Pcs)', 'Khatta Meetha Pani Puri(6 Pcs)', 'Sev Puri(6 Pcs)', 'Masala Puri(6 Pcs)', 'Dahi Puri(6 Pcs)'],
  'Chaat Specials': ['Plain Papdi Chaat', 'Samosa Chaat', 'Masala Papdi Chaat', 'Aloo Tikki Chaat (Dahi)', 'Aloo Tikki Chaat (Chhole)'],
  'Pizzas': ['Veg Pizza', 'Corn Pizza', 'Paneer Pizza', 'Double Cheese Pizza', 'Italian Pizza'],
  'Meggi Station': ['Plain Butter Maggi', 'Veg Maggi', 'Schezwan Maggi', 'Corn & Cheese Maggi', 'Tandoori Maggi'],
  'Burgers': ['Aloo Tikki Burger', 'Veg Burger', 'Mexican Burger', 'Tandoori Burger', 'Paneer Masala Burger'],
  'Snacks': ['Samosa', 'Kachori', 'Vada Pav', 'Pav Bhaji'],
  'Momos': ['Fried Veg Momos', 'Fried Paneer Momos'],
  'Shakes': ['Mango Shake', 'Strawberry Shake', 'Vanilla Shake', 'KitKat Shake', 'Oreo Shake', 'Chocolate Shake'],
  'Tea & Coffee': ['Masala Tea', 'Chocolate Tea', 'Hot Coffee', 'Chocolate Coffee', 'Hot Chocolate'],
  'Cold Coffee': ['Cold Coffee Normal', 'Thick Cold Coffee', 'Chocolate Cold Coffee'],
  'Mojitos': ['Mint Mojito', 'Watermelon Mojito', 'Spicy Mango Mojito', 'Blueberry Mojito'],
  'Lemonade': ['Masala Lemonade'],
  'Fries': ['Salted Fries', 'Peri Peri Fries', 'Spicy Chatpat Fries']
};

const menuCategories = Object.keys(menuItems);

// Features with SVG Icons
const features = [
  { 
    icon: '🌿',
    title: 'Environment Friendly', 
    desc: 'We are responsible for what we do, our operational activities keep the nature clean.' 
  },
  { 
    icon: '🍽️',
    title: 'Diversified Menu', 
    desc: 'Be it chaat, pizza, burgers, and more, we have 150+ menu variety for everyone.' 
  },
  { 
    icon: '⭐',
    title: 'Best Quality & Taste', 
    desc: 'We offer healthy and hygienic food made of natural ingredients.' 
  },
  { 
    icon: '📈',
    title: 'Proven & Tested Concept', 
    desc: 'We have excellent & affordable models that can be replicated easily.' 
  },
  { 
    icon: '🤝',
    title: 'World-Class Support', 
    desc: 'Our Staff is well-skilled to assist franchise partners efficiently.' 
  },
  { 
    icon: '🔄',
    title: 'Hassle-Free Operations', 
    desc: 'We maintain Excellence in day-to-day operations.' 
  },
];

// Testimonials with images
const testimonials = [
  { 
    name: 'Rahil Jain', 
    text: 'Their organization is very good and is spread over many places and the service is also very good along with the taste.', 
    city: 'Indore',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  { 
    name: 'Vinit Tiwari', 
    text: 'chai coffee itself provides training of its products to its franchise owner along with the service of the staff.', 
    city: 'Bhopal',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  { 
    name: 'Priya Sharma', 
    text: 'Best franchise opportunity in India. Great support and amazing food quality.', 
    city: 'Mumbai',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
];

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(menuCategories[0]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', enquiry: '' });
  const [showThankYou, setShowThankYou] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError('');
    try {
      await submitLead('/leads/popup', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        message: formData.enquiry,
      });
      setShowPopup(false);
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 3000);
      setFormData({ name: '', email: '', phone: '', city: '', enquiry: '' });
    } catch (err: any) {
      setFormError(err?.response?.data?.message || 'Could not submit. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="jk-home">
      <style>{`
        /* ===== RESET & BASE ===== */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
        .jk-home { background: #0a0a0a; color: #fff; overflow-x: hidden; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section { padding: 80px 0; position: relative; }
        .section-head { margin-bottom: 48px; }
        .section-head.center { text-align: center; }
        .eyebrow {
          color: #FFD700;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
          display: inline-block;
        }
        .section-title {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 700;
          line-height: 1.2;
          color: #fff;
        }
        /* ===== YELLOW HEADINGS - LARGER ===== */
        .jk-why-card h3 {
          font-size: 2rem !important;
          color: #FFD700;
          margin: 0 0 16px;
        }
        .jk-feature-card h3 {
          font-size: 1.8rem !important;
          color: #FFD700;
          margin: 0 0 8px;
        }
        .jk-about-feature h4 {
          font-size: 1.15rem !important;
          color: #fff;
          margin: 0 0 2px;
        }
        .jk-testimonial-author h4 {
          font-size: 1.1rem !important;
          color: #fff;
          margin: 0;
        }
        .jk-why-number {
          font-size: 3rem !important;
          font-weight: 800;
          color: rgba(255,215,0,0.12);
          line-height: 1;
          margin-bottom: 8px;
        }
        .section-sub {
          color: #aaa;
          font-size: 1.05rem;
          max-width: 600px;
          margin: 12px auto 0;
          line-height: 1.7;
        }
        .section-head.center .section-sub { margin: 12px auto 0; }

        /* ===== COLOR ACCENT BAR ON CARDS (adds warmth beyond pure black/gold) ===== */
        .jk-why-card, .jk-feature-card {
          position: relative;
          overflow: hidden;
        }
        .jk-why-card::before, .jk-feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #FFD700, #E63946);
        }
        .jk-about-feature:nth-child(2n) { border-left-color: #E63946; }
        .jk-testimonial-card { border-top: 3px solid; border-image: linear-gradient(90deg, #FFD700, #E63946) 1; }

        /* ===== BUTTONS ===== */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }
        .btn-primary {
          background: #FFD700;
          color: #0a0a0a;
          box-shadow: 0 8px 30px rgba(255,215,0,0.2);
        }
        .btn-primary:hover {
          background: #f4c430;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255,215,0,0.3);
        }
        .btn-ghost {
          background: rgba(255,255,255,0.06);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.12);
          transform: translateY(-2px);
        }
        .btn-hero {
          background: #fff;
          color: #0a0a0a;
          font-size: 1.1rem;
          padding: 16px 36px;
        }
        .btn-hero:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255,255,255,0.15);
        }
        .btn-outline {
          background: transparent;
          color: #FFD700;
          border: 2px solid #FFD700;
        }
        .btn-outline:hover {
          background: #FFD700;
          color: #0a0a0a;
          transform: translateY(-2px);
        }

        /* ===== HERO ===== */
        .jk-hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .jk-hero-slider {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .jk-hero-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .jk-hero-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .jk-hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(20,4,4,0.87) 0%, rgba(20,4,4,0.5) 50%, rgba(0,0,0,0.3) 100%);
        }
        .jk-hero-content {
          position: relative;
          z-index: 2;
          max-width: 820px;
        }
        .jk-hero-headline {
          font-size: clamp(1.9rem, 4.6vw, 4.4rem);
          font-weight: 800;
          line-height: 1.08;
          color: #fff;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }
        .jk-hero-headline .grad-text {
          background: linear-gradient(135deg, #FFD700, #F4A900);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .jk-hero-sub {
          color: rgba(255,255,255,0.85);
          font-size: clamp(0.95rem, 1.7vw, 1.2rem);
          line-height: 1.8;
          max-width: 700px;
          margin-bottom: 32px;
          white-space: nowrap;
        }
        .jk-hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
        }
        .jk-slider-dots {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }
        .jk-slider-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.3);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .jk-slider-dot.active {
          background: #9c9b5b;
          border-color: #FFD700;
          transform: scale(1.2);
        }

        /* ===== POPUP ===== */
        .jk-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        .jk-popup {
          background: #1a1a1a;
          border-radius: 24px;
          padding: 48px;
          max-width: 480px;
          width: 90%;
          border: 1px solid rgba(255,215,0,0.1);
          position: relative;
        }
        .jk-popup h2 {
          color: #FFD700;
          font-size: 1.8rem;
          margin-bottom: 8px;
        }
        .jk-popup p {
          color: #aaa;
          margin-bottom: 24px;
        }
        .jk-popup input,
        .jk-popup textarea {
          width: 100%;
          padding: 12px 16px;
          margin-bottom: 14px;
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          color: #fff;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        .jk-popup input:focus,
        .jk-popup textarea:focus {
          outline: none;
          border-color: #FFD700;
        }
        .jk-popup textarea { min-height: 80px; resize: vertical; }
        .jk-popup .btn { width: 100%; justify-content: center; }
        .jk-popup-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          color: #666;
          font-size: 1.5rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .jk-popup-close:hover { color: #fff; }
        .jk-thankyou {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(12px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.5s ease;
        }
        .jk-thankyou-content {
          text-align: center;
          animation: scaleUp 0.5s ease;
        }
        .jk-thankyou-content .icon {
          font-size: 4rem;
          margin-bottom: 16px;
        }
        .jk-thankyou-content h2 {
          color: #FFD700;
          font-size: 2rem;
        }
        .jk-thankyou-content p {
          color: #aaa;
          font-size: 1.1rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        /* ===== MARQUEE ===== */
        .jk-marquee {
          background: linear-gradient(90deg, #FFD700, #F4A900);
          padding: 14px 0;
          overflow: hidden;
        }
        .jk-marquee-track {
          display: flex;
          animation: marqueeScroll 30s linear infinite;
          white-space: nowrap;
        }
        .jk-marquee-track span {
          display: inline-block;
          padding: 0 24px;
          color: #0a0a0a;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ===== ABOUT ===== */
        .jk-about { background: radial-gradient(circle at 20% 20%, rgba(230,57,70,0.06), transparent 55%), #0d0d0d; }
        .jk-about-grid {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .jk-about-text .section-title { margin: 10px 0 16px; }
        .jk-about-text p { color: #aaa; font-size: 1.05rem; line-height: 1.8; }
        .jk-about-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 24px 0 30px;
        }
        .jk-about-feature {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          background: rgba(255,215,0,0.03);
          padding: 16px 20px;
          border-radius: 12px;
          border-left: 3px solid #FFD700;
        }
        .jk-about-feature p { color: #aaa; font-size: 0.9rem; margin: 0; }
        .jk-about-image {
          position: relative;
        }
        .jk-about-image img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 24px;
        }
        .jk-about-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: #1a1a1a;
          border: 2px solid #FFD700;
          padding: 16px 24px;
          border-radius: 16px;
          text-align: center;
        }
        .jk-about-badge .num {
          font-size: 2rem;
          font-weight: 800;
          color: #FFD700;
          display: block;
        }
        .jk-about-badge .label {
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
        }

        /* ===== WHY US ===== */
        .jk-why-us { background: radial-gradient(circle at 80% 10%, rgba(255,215,0,0.05), transparent 55%), #0a0a0a; }
        .jk-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .jk-why-card {
          background: #1a1a1a;
          border-radius: 20px;
          padding: 32px 24px;
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.3s ease;
        }
        .jk-why-card:hover {
          border-color: rgba(255,215,0,0.15);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -16px rgba(0,0,0,0.5);
        }
        .jk-why-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .jk-why-card ul li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #FFD700;
          font-size: 0.95rem;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,215,0,0.04);
        }
        .jk-why-card ul li:last-child { border-bottom: none; }
        .jk-why-card ul li svg {
          width: 16px;
          height: 16px;
          color: #FFD700;
          flex-shrink: 0;
        }

        /* ===== MENU ===== */
        .jk-menu { background: #0d0d0d; }
        .jk-menu-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin: 30px 0 24px;
        }
        .jk-menu-tab {
          padding: 10px 22px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.06);
          background: transparent;
          color: #aaa;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .jk-menu-tab:hover { border-color: rgba(255,215,0,0.2); color: #fff; }
        .jk-menu-tab.active {
          background: #FFD700;
          color: #0a0a0a;
          border-color: #FFD700;
        }
        .jk-menu-items {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 700px;
          margin: 0 auto;
        }
        .jk-menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          background: rgba(255,255,255,0.02);
          border-radius: 10px;
          color: #ddd;
          font-size: 0.9rem;
          border: 1px solid rgba(255,255,255,0.03);
        }
        .jk-menu-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FFD700;
          flex-shrink: 0;
        }
        .jk-menu-cta { text-align: center; margin-top: 30px; }

        /* ===== FEATURES ===== */
        .jk-features { background: #0a0a0a; }
        .jk-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .jk-feature-card {
          background: #1a1a1a;
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.3s ease;
        }
        .jk-feature-card:hover {
          border-color: rgba(255,215,0,0.1);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -16px rgba(0,0,0,0.4);
        }
        .jk-feature-icon {
          font-size: 2.8rem;
          display: block;
          margin-bottom: 12px;
        }
        .jk-feature-card p {
          color: #aaa;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }

        /* ===== TESTIMONIALS ===== */
        .jk-testimonials { background: #0d0d0d; }
        .jk-testimonial-slider {
          max-width: 720px;
          margin: 40px auto 0;
        }
        .jk-testimonial-card {
          background: #1a1a1a;
          border-radius: 24px;
          padding: 40px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .jk-testimonial-stars {
          color: #FFD700;
          font-size: 1.2rem;
          letter-spacing: 4px;
          margin-bottom: 16px;
        }
        .jk-testimonial-text {
          color: #fff;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .jk-testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }
        .jk-testimonial-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #FFD700;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .jk-testimonial-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .jk-testimonial-author span {
          color: #aaa;
          font-size: 0.8rem;
        }
        .jk-testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 24px;
        }
        .jk-testimonial-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #666;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .jk-testimonial-dot.active {
          background: #FFD700;
          border-color: #FFD700;
          transform: scale(1.2);
        }

        /* ===== CTA ===== */
        .jk-cta { background: #0a0a0a; padding-top: 20px; }
        .jk-cta-banner {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          min-height: 320px;
          display: flex;
          align-items: center;
        }
        .jk-cta-bg {
          position: absolute;
          inset: 0;
        }
        .jk-cta-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .jk-cta-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(30,4,4,0.88), rgba(60,10,10,0.35));
        }
        .jk-cta-content {
          position: relative;
          z-index: 1;
          padding: 50px 48px;
          max-width: 600px;
        }
        .jk-cta-content h2 {
          color: #fff;
          font-size: 2.2rem;
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .jk-cta-content p {
          color: rgba(255,255,255,0.8);
          margin-bottom: 24px;
          font-size: 1rem;
        }
        .jk-cta-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .jk-about-grid { grid-template-columns: 1fr; gap: 40px; }
          .jk-why-grid { grid-template-columns: repeat(2, 1fr); }
          .jk-features-grid { grid-template-columns: repeat(2, 1fr); }
          .jk-menu-items { grid-template-columns: repeat(2, 1fr); }
          .jk-why-card h3 { font-size: 1.7rem !important; }
          .jk-feature-card h3 { font-size: 1.5rem !important; }
        }
        @media (max-width: 768px) {
          .jk-why-grid { grid-template-columns: 1fr; }
          .jk-features-grid { grid-template-columns: 1fr; }
          .jk-menu-items { grid-template-columns: 1fr; }
          .jk-about-badge { right: 0; }
          .jk-cta-content { padding: 30px 24px; }
          .jk-cta-content h2 { font-size: 1.6rem; }
          .jk-testimonial-card { padding: 28px 20px; }
          .jk-hero { min-height: 60vh; }
          .jk-hero-headline { font-size: 2.4rem; white-space: normal; }
          .jk-hero-sub { font-size: 1rem; white-space: normal; }
          .jk-why-card h3 { font-size: 1.5rem !important; }
          .jk-feature-card h3 { font-size: 1.3rem !important; }
        }
        @media (max-width: 576px) {
          .jk-hero { min-height: 50vh; padding: 80px 0 60px; }
          .jk-hero-headline { font-size: 1.9rem; white-space: normal; }
          .jk-hero-sub { white-space: normal; }
          .jk-hero-buttons { flex-direction: column; }
          .btn-hero, .btn, .btn-cta { width: 100%; justify-content: center; }
          .jk-menu-tabs { gap: 4px; }
          .jk-menu-tab { padding: 6px 14px; font-size: 0.75rem; }
          .jk-popup { padding: 32px 20px; }
          .jk-slider-dot { width: 8px; height: 8px; }
          .jk-why-card h3 { font-size: 1.3rem !important; }
          .jk-feature-card h3 { font-size: 1.15rem !important; }
          .jk-about-feature h4 { font-size: 1rem !important; }
        }
      `}</style>

      {/* ============ HERO ============ */}
      <section className="jk-hero" ref={heroRef}>
        <div className="jk-hero-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="jk-hero-slide"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <img src={HERO_IMAGES[currentSlide]} alt="Hero" />
              <div className="jk-hero-gradient" />
            </motion.div>
          </AnimatePresence>
          <div className="jk-slider-dots">
            {HERO_IMAGES.map((_, i) => (
              <button key={i} className={`jk-slider-dot ${currentSlide === i ? 'active' : ''}`} onClick={() => setCurrentSlide(i)} />
            ))}
          </div>
        </div>

        <div className="container jk-hero-content">
          <motion.h1 className="jk-hero-headline" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Welcome to <span className="grad-text">JK Chaat Cafe</span>
          </motion.h1>

          <motion.p className="jk-hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Come and Join hands with most Unique food franchise business concept.
          </motion.p>

          <motion.div className="jk-hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            <button className="btn btn-hero" onClick={() => setShowPopup(true)}>
              Get Franchise Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ============ POPUP ============ */}
      {showPopup && (
        <div className="jk-popup-overlay" onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}>
          <div className="jk-popup">
            <button className="jk-popup-close" onClick={() => setShowPopup(false)}>✕</button>
            <h2>Get Franchise</h2>
            <p>Fill in your details and we'll get back to you</p>
            <form onSubmit={handleFormSubmit}>
              <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              <input type="text" placeholder="City" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} required />
              <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              <textarea placeholder="Your Enquiry..." value={formData.enquiry} onChange={(e) => setFormData({...formData, enquiry: e.target.value})} />
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
              {formError && <p style={{ color: '#E63946', fontSize: '0.85rem', marginTop: 10 }}>{formError}</p>}
            </form>
          </div>
        </div>
      )}

      {/* ============ THANK YOU ============ */}
      {showThankYou && (
        <div className="jk-thankyou">
          <div className="jk-thankyou-content">
            <div className="icon">🎉</div>
            <h2>Thank You!</h2>
            <p>We'll get back to you shortly.</p>
          </div>
        </div>
      )}

      {/* ============ MARQUEE ============ */}
      <div className="jk-marquee">
        <div className="jk-marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              Complete Franchise Setup • Kitchen Equipment • Premium Masala • Interior Design • Staff Training • Marketing Support • Menu Planning • Launch Support •
            </span>
          ))}
        </div>
      </div>

      {/* ============ ABOUT ============ */}
      <section className="section jk-about">
        <div className="container">
          <div className="jk-about-grid">
            <motion.div className="jk-about-text" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              {/* <div className="eyebrow">Top Franchise Business</div> */}
              <h2 className="section-title">Profitable and consistent growth as the ingredient to achieve our goal.</h2>
              <p>We've grown into a top-notch food franchise brand by continuously offering quality services to our clients. Being one of the most-trusted food brands, our focus is to deliver rich quality food, hygiene, awesome taste, and unmatched services to our partners.</p>
              <div className="jk-about-features">
                <div className="jk-about-feature">
                  <div><h4>360° Brand Support</h4><p>Location guidance, site development, and opening event planning.</p></div>
                </div>
                <div className="jk-about-feature">
                  <div><h4>ROI in 12-15 Months</h4><p>High profit margin with low investment and fast returns.</p></div>
                </div>
                <div className="jk-about-feature">
                  <div><h4>Complete Training Support</h4><p>Owner training, staff hiring, and operation audit support.</p></div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">More About Us <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg></Link>
            </motion.div>

            <motion.div className="jk-about-image" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src={about} alt="JK Chaat Cafe" />
              <div className="jk-about-badge">
                <span className="num">6+</span>
                <span className="label">Years of Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="section jk-why-us">
        <div className="container">
          <Reveal className="section-head center">
            {/* <div className="eyebrow">Why Choose Our Franchise Model</div> */}
            <h2 className="section-title">Your Success, Our Priority</h2>
          </Reveal>

          <div className="jk-why-grid">
            {[
              { number: '01', title: 'Our Purpose', items: ['360° Brand Support', 'Location Guidance', 'Site Development', 'Opening Event Planning', 'ROI in 12-15 Months', 'Owner Training'] },
              { number: '02', title: 'Dedicated Service', items: ['Raw Material Support', 'Design & Construction', 'Marketing & Promotion', 'Standard Recipes', 'Budget Friendly Menu', 'High Profit Margin'] },
              { number: '03', title: 'Sustainable Business Models', items: ['Extensive R&D', 'Low Cost Model', 'Modern-Day Trends', 'Long-Term Success', 'Scalable Operations'] }
            ].map((item, i) => (
              <motion.div key={i} className="jk-why-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -8 }}>
                <div className="jk-why-number">{item.number}</div>
                <h3>{item.title}</h3>
                <ul>
                  {item.items.map((li, idx) => (
                    <li key={idx}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
                      {li}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MENU ============ */}
      <section className="section jk-menu">
        <div className="container">
          <Reveal className="section-head center">
            {/* <div className="eyebrow">Our Tasty Menu</div> */}
            <h2 className="section-title">Check Our Delicious Menu</h2>
          </Reveal>

          <div className="jk-menu-tabs">
            {menuCategories.map((cat) => (
              <button key={cat} className={`jk-menu-tab ${activeMenu === cat ? 'active' : ''}`} onClick={() => setActiveMenu(cat)}>
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeMenu} className="jk-menu-items" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              {menuItems[activeMenu as keyof typeof menuItems]?.map((item, i) => (
                <motion.div key={i} className="jk-menu-item" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <span className="jk-menu-dot" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <Reveal className="jk-menu-cta">
            <Link to="/products" className="btn btn-primary">Discover More Menu <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg></Link>
          </Reveal>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="section jk-features">
        <div className="container">
          <Reveal className="section-head center">
            {/* <div className="eyebrow">Our Best Features</div> */}
            <h2 className="section-title">What Makes Us Different</h2>
          </Reveal>

          <div className="jk-features-grid">
            {features.map((f, i) => (
              <motion.div key={i} className="jk-feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -8 }}>
                <span className="jk-feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      {/* <section className="section jk-testimonials">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Happy Clients</div>
            <h2 className="section-title">What Our Partners Say</h2>
          </Reveal>

          <div className="jk-testimonial-slider">
            <AnimatePresence mode="wait">
              <motion.div key={currentTestimonial} className="jk-testimonial-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}>
                <div className="jk-testimonial-stars">★★★★★</div>
                <p className="jk-testimonial-text">"{testimonials[currentTestimonial].text}"</p>
                <div className="jk-testimonial-author">
                  <div className="jk-testimonial-avatar">
                    <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
                  </div>
                  <div>
                    <h4>{testimonials[currentTestimonial].name}</h4>
                    <span>{testimonials[currentTestimonial].city}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="jk-testimonial-dots">
              {testimonials.map((_, i) => (
                <button key={i} className={`jk-testimonial-dot ${currentTestimonial === i ? 'active' : ''}`} onClick={() => setCurrentTestimonial(i)} />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* ============ CTA ============ */}
      <section className="section jk-cta">
        <div className="container">
          <motion.div className="jk-cta-banner" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="jk-cta-bg">
              <img src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&q=80" alt="Kitchen" />
              <div className="jk-cta-overlay" />
            </div>
            <div className="jk-cta-content">
              <h2>Start Your Entrepreneurship Journey Today</h2>
              <p>Join us for unbeatable success with our unique formula to outperform well-established players.</p>
              <div className="jk-cta-buttons">
                <Link to="/franchise-application" className="btn btn-primary">Become a Franchise Partner <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg></Link>
                <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}