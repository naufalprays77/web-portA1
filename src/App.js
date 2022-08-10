import Home from './view/Home';
import About from './view/About';
import Gallery from './view/Gallery';
import Review from './view/Review';
import Contact from './view/Contatc';
import { Footer } from './components/Footer';
import { BreakSection } from './components/BreakSection';

function App() {
  return (
    <div className="container">
      <div>
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div>
        <BreakSection />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Review />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
