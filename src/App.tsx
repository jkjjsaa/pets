import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedPets from './components/FeaturedPets';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ChatBubble from './components/ChatBubble';

function App() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const toggleWishlist = (petId: number) => {
    setWishlist(prev =>
      prev.includes(petId)
        ? prev.filter(id => id !== petId)
        : [...prev, petId]
    );
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Header cartCount={cartCount} />
      <Hero />
      <Categories />
      <FeaturedPets
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
        addToCart={addToCart}
      />
      <TrustSection />
      <Testimonials />
      <Newsletter />
      <Footer />
      <ChatBubble />
    </div>
  );
}

export default App;
