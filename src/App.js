import Header from "./components/header/Header"; 
import Hero from "./components/hero/Hero";
import CarTypes from "./components/car-types/CarTypes";
import Categories from "./components/categories/Categories";
import Services from "./components/our-services/Services";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CarTypes />
      <Categories />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
