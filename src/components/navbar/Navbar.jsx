import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/nuyu.svg";
import Arrow from "../../assets/arrow.svg";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetScroll = windowHeight / 2;

      if (scrollY > targetScroll) {
        gsap.to(navbarRef.current, { opacity: 1, duration: 0.5 });
      } else {
        gsap.to(navbarRef.current, { opacity: 0.9, duration: 0.5 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="bg-[#cac1c1] flex justify-between fixed z-10 left-0 right-0 items-center px-4 sm:px-6 lg:px-4 py-4 sm:py-6 lg:py-8 opacity-90 transition-opacity duration-300"
    >
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-8 sm:h-10 lg:h-14" style={{
    imageRendering: "auto", 
        filter: "contrast(130%)", // Slightly increase contrast for sharper appearance
  }} />
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl text-black focus:outline-none font-openSans"
        >
          {isOpen ? <FaTimes /> : <FaBars />}{" "}
          {/* Toggle between hamburger and close icon */}
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center">
        <a className="text-sm xl:text-base font-normal text-black px-4 py-2  lg:px-6 font-openSans cursor-pointer hover:-translate-y-1 transition-all ease-in">
          Home
        </a>
        <a className="text-sm xl:text-base font-normal text-black px-4 py-2 duration-300 lg:px-6 font-openSans cursor-pointer  hover:-translate-y-1">
          About Us
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm xl:text-base font-normal text-black px-4 py-2 lg:px-6 transition duration-300 font-openSans  hover:-translate-y-1"
        >
          Treatments
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm xl:text-base font-normal text-black px-4 py-2 lg:px-6 transition duration-300 font-openSans  hover:-translate-y-1"
        >
          Smile Gallery
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm xl:text-base font-normal text-black px-4 py-2  lg:px-6 transition   font-openSans  hover:-translate-y-1 duration-300"
        >
          Fees
        </a>
      </div>

      {/* Get In Touch Button - Desktop Only */}
      <div className="hidden lg:flex items-center">
  <button className="bg-[#9E7F61] flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-md transition-all duration-200 text-white hover:bg-[#dac0a7] gap-2 group">
    <span className="text-sm sm:text-base lg:text-lg font-openSans  transition-all duration-200">
      Get In Touch
    </span>
    <img
      src={Arrow}
      alt="arrow"
      className="h-4 sm:h-5 lg:h-6  transition-all duration-200"
    />
  </button>
</div>


      {/* Mobile Menu Links - Shown after Navbar */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#cac1c1] h-screen flex flex-col items-center justify-center">
          {/* Close Icon at the Top */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-6 text-3xl text-black"
          >
            <FaTimes />
          </button>

          {/* Menu Items Centered */}
          <div className="flex flex-col items-center space-y-6">
            <a className="text-lg font-normal text-black" href="#">
              Home
            </a>
            <a className="text-lg font-normal text-black" href="#">
              About Us
            </a>
            <a
              className="text-lg font-normal text-black"
              href="https://smilefastusa.myshopify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Treatments
            </a>
            <a
              className="text-lg font-normal text-black"
              href="https://us.smilefastlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smile Gallery
            </a>
            <a
              className="text-lg font-normal text-black"
              href="https://us.smilefastlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fees
            </a>
            <button className="bg-[#9E7F61] flex items-center px-8 py-3 rounded-md text-white gap-2">
              <span className="text-lg">Get In Touch</span>
              <img src={Arrow} alt="arrow" className="h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
