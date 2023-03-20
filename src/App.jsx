import Navbar from "./global/Navbar";
import Hero from "./Home/Hero";
import Features from "./Home/Features";
import Blogs from "./Home/Blogs";
import Footer from "./global/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Features />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
