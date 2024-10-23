import React, { useEffect, useRef } from "react";
import Logo from "../../assets/nuyu.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [logoRef.current, textRef.current];

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert(); // Clean up the context on unmount
  }, []);

  return (
    <div className="bg-[#9E7F61] h-auto">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="w-full lg:w-[37%] h-auto pt-[40px] flex justify-center flex-col md:pt-[30px] pl-[20px] md:pl-4">
        <img 
          src="https://nuyu-swart.vercel.app/assets/img/Logo-white.png" 
          className="mb-4 w-60 h-auto filter invert brightness-0" 
          alt="Logo" 
        />
          <p
            ref={textRef}
            className=" text-[14px] md:text-[22px] 2xl:text-[20px] font-normal font-openSans text-[#CDD8D9]"
          >
            Amet quis rhoncus turpis phasellus ut dui. Volutpat turpis tortor blandit eget nibh ac lacus vitae purus. Sagittis tortor fermentum.
          </p>

          {/* Social media icons */}
          <div className="flex mt-[17px] space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#DAC0A7] p-2">
              <FontAwesomeIcon icon={faTwitter} className="text-white text-[18px]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#DAC0A7] p-2">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-[18px]" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-[#DAC0A7] p-2">
              <FontAwesomeIcon icon={faYoutube} className="text-white text-[18px]" />
            </a>
          </div>
        </div>

        <div className="py-[36px] w-full lg:w-[60%]">
          {/* Responsive iframe wrapper */}
          <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2461.784351323219!2d-2.076484374634367!3d51.90139943184595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUnit%201%20Market%20Place%2C%2068%20Winchcombe%20Street%2C%20Cheltenham%2C%20GL52%206NZ!5e0!3m2!1sen!2s!4v1729703629237!5m2!1sen!2s"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
