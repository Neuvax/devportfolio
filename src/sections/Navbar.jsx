import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}
      role="banner"
    >
      <div className="inner">
        <a
          className="logo"
          href="#hero"
          aria-label="Jorge Wolburg - Portfolio Homepage"
        >
          Jorge Wolburg
        </a>
        <nav className="desktop" role="navigation" aria-label="Main navigation">
          <ul role="list">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group" role="listitem">
                <a href={link} aria-label={`Navigate to ${name} section`}>
                  <span>{name}</span>
                  <span className="underline" aria-hidden="true"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="contact-btn group"
          href="#contact"
          aria-label="Get in touch - Contact Jorge Wolburg"
        >
          <div className="inner">
            <span>Get in Touch</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
