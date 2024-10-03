import React, { useEffect, useRef } from "react";
import Logo from "../../assets/nuyu.svg";
import Map from "../../assets/location.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const mapRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the logo
      gsap.fromTo(
        logoRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate the text
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

    });

    return () => ctx.revert(); // Clean up the context on unmount
  }, []);

  return (
    <div className="bg-[#9E7F61] ">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="w-full lg:w-[37%] h-auto pt-[40px] md:pt-[70px] pl-[20px] md:pl-4">
          <img
            ref={logoRef}
            src={Logo}
            className="w-full max-w-[120px] md:max-w-[340px]"
            alt="Logo"
          />
          <p
            ref={textRef}
            className="mt-[28px] text-[14px] md:text-[16px] font-normal font-openSans text-[#CDD8D9]"
          >
            Amet quis rhoncus turpis phasellus ut dui. Volutpat turpis tortor
            blandit eget nibh ac lacus vitae purus. Sagittis tortor fermentum.
          </p>

          {/* Social media icons */}
          <div className="flex mt-[20px] space-x-4">
            <div className="bg-[#DAC0A7] p-2">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white text-[18px]"
              />
            </div>
            <div className="bg-[#DAC0A7] p-2">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white text-[18px]"
              />
            </div>
            <div className="bg-[#DAC0A7] p-2">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white text-[18px]"
              />
            </div>
          </div>
        </div>

        <div className="py-[36px] w-full lg:w-[60%]">
          <img
            src={Map}
            alt="Map"
            className="w-full md:max-w-none"
          />
        </div>
      </div>
      <div className="bg-[#DAC0A7] h-[150px] text-center px-3 py-[24px]">
        <p ref={textRef} className="text-[14px] text-BLACK font-openSans">
          © 2024 NuYu Dental. All rights reserved
        </p>
        <p  ref={textRef} className="text-[14px] text-BLACK font-openSans">
          Privacy & Cookie Policy | Terms of Use | CQC | GDC | Complaints Policy
        </p>
        <p ref={textRef} className="text-[14px] text-BLACK font-openSans">
          designed and maintained by smile marketing & consultancy
        </p>
        <p  ref={textRef} className="text-[14px] text-BLACK font-openSans">
          website last updated on 29/09/2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
