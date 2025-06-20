import Hero from './components/Hero';
import About from './components/About';
import Stream from './components/Stream';
import Contact from './components/contact';
import Portfolio from './components/Portfollio';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import BubblesBackground from './components/BubblesBackground';

function App() {


  return (
    <div className="max-w-full overflow-x-hidden">
      <BubblesBackground />
      <Navbar />
      
      <Hero />
      <About />
      <Stream />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop /> 
    </div>
  );
}

export default App;
