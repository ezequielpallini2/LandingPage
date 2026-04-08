import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Features from './components/Features';
import ProductSection from './components/ProductSection';
import Benefits from './components/Benefits';
import FleetSection from './components/FleetSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Video from './components/Video'; 

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      <Video />

      <ProblemSection />
      <Features />
      <ProductSection />
      <Benefits />
      <FleetSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
