import { useEffect, useState } from "react";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav className={`navbar ${show ? "visible" : "hidden"}`}>
      <div className="logo-container">
        <img src="/images/adlogo.png" alt="Logo" className="logo-img" />
        <span>AD EVENT PLANNER</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
	<li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact" className="book-now-btn">Book Now</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
