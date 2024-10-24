import React, { useEffect, useRef } from "react";
import Map from "../../assets/mappin.svg";
import Phone from "../../assets/phone.svg";
import Mail from "../../assets/mail.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Infobar = () => {
  const titleRefs = useRef([]);
  titleRefs.current = [];

  // Helper function to add refs to the array
  const addToRefs = (el) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el);
    }
  };

  useEffect(() => {
    titleRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: -50, opacity: 0 }, // Initial state
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 50%", // Trigger when the top of the element hits 50% of the viewport
            toggleActions: "play none none none", // Play on enter, none on leave
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex sx:flex-row md:flex-col lg:flex-row items-center sticky z-10  top-0 left-0 right-0 justify-center sm:justify-between px-6 md:px-[30px] py-[17px] bg-PRIMARY">
      {/* Location Section */}
      <Link to='/'>
      <div className="flex items-center justify-center gap-[12px]   md:mb-0 mr-4 sm:mr-0">
        <img src={Map} alt="Map Icon" className="w-6 h-6 " />
        <p ref={addToRefs} className="text-[14px] hidden sm:block  font-normal text-black font-openSans  sm:mb-0  cursor-pointer">
          Unit 1 Market Place, 68 Winchcombe Street, Cheltenham, GL52 6NZ
        </p>
      </div>
      </Link>
      {/* Contact Section */}
      <div className="flex flex-row md:flex-row gap-4 sm:gap-[22px]  text-[14px]">
        {/* Phone Section */}
      <Link to=''>
        <div className="flex items-center gap-1">
          <img src={Phone} alt="Phone Icon" className="w-6 h-6" />
          <p ref={addToRefs} className="font-normal font-openSans  hidden sm:block cursor-pointer">+62 864 6444 2222</p>
        </div>
        </Link>

        {/* Divider */}
        <div className="hidden md:block">|</div>

        {/* Email Section */}
        <Link to=''>
        <div className="flex items-center gap-1">
          <img src={Mail} alt="Mail Icon" className="w-6 h-6" />
          <p ref={addToRefs} className="font-normal text-[14px]  hidden sm:block font-openSans cursor-pointer">info@nuyu-dental.co.uk</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Infobar;
