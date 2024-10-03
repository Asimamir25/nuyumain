import React, { useEffect, useRef } from "react";
import HeroImage from "../../assets/heroimage.png";
import HeroLogo from "../../assets/herologo.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null); // Reference for the text

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: -50 }, // Initial state for logo
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top 80%", // Trigger animation when the top of the logo hits 80% of the viewport
            toggleActions: "play none none reverse", // Play on enter, none on leave
          },
        }
      );
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 }, // Initial state for text
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%", // Trigger animation when the top of the text hits 80% of the viewport
            toggleActions: "play none none reverse", // Play on enter, none on leave
          },
        }
      );
    }
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gray-100 z-[-1]">
      <img 
        src={HeroImage} 
        alt="Hero" 
        className="object-cover h-full w-full object-[80%_100%] md:object-[70%_80%] z-0" 
      />
      <img 
        ref={logoRef}
        src={HeroLogo} 
        alt="Hero Logo" 
        className="absolute h-72 w-72" // Ensures the logo is on top of the hero image
      />
    
    </div>
  );
};

export default Hero;
