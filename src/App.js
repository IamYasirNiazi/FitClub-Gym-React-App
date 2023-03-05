import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Subscribe from './Components/Subscribe/Subscribe';
import Testimonials from './Components/Testimonials/Testimonials';
import WhyChooseUs from './Components/Why Choose Us/WhyChooseUs';

function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <WhyChooseUs />
          <Plans />
          <Testimonials />
          <Subscribe />
          <Footer />
    </div>
  );
}

export default App;
