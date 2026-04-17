import './App.css';
import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Careers from './Pages/Careers';
import Home from './Pages/Home';

function App() {

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const follower = document.querySelector(".cursor-follower");

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    // mouse move
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursor) {
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
      }
    });

    // smooth follower animation
    function animate() {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      if (follower) {
        follower.style.left = posX + "px";
        follower.style.top = posY + "px";
      }

      requestAnimationFrame(animate);
    }

    animate();

    // hover effect
    const hoverElements = document.querySelectorAll("a, button, .card");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (follower) {
          follower.style.transform = "translate(-50%, -50%) scale(1.8)";
        }
      });

      el.addEventListener("mouseleave", () => {
        if (follower) {
          follower.style.transform = "translate(-50%, -50%) scale(1)";
        }
      });
    });

  }, []);

  return (
    <div className="App">
      <div className="custom-cursor"></div>
      <div className="cursor-follower"></div>

      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />



    </div>
  );
}

export default App;