import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";


const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
