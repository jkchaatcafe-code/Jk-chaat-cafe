import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SmartPopup from './components/SmartPopup';
import Home from './pages/Home';
import About from './pages/About';
import Franchise from './pages/Franchise';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import FranchiseApplication from './pages/FranchiseApplication';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import AdminApp from './admin/AdminApp';
import BlogDetail from './pages/BlogDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const skipPopup = pathname === '/thank-you' || pathname === '/404';

  // Admin panel gets its own layout entirely — no public Header/Footer/Popup.
  if (pathname.startsWith('/admin')) {
    return <AdminApp />;
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
         <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/franchise-application" element={<FranchiseApplication />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {!skipPopup && <SmartPopup />}
    </>
  );
}
