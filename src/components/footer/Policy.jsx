import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Policy = () => {
  const textRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the logo
    
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
    <div className="bg-[#DAC0A7] text-center  py-[10px]">
      <p  className="text-[12px] text-BLACK font-openSans">
        © 2024 NuYu Dental. All rights reserved
      </p>
      <p  className="text-[12px] text-BLACK font-openSans">
        Privacy & Cookie Policy | Terms of Use | CQC | GDC | Complaints Policy
      </p>
      <p  className="text-[12px] text-BLACK font-openSans">
        designed and maintained by smile marketing & consultancy
      </p>
      <p className="text-[12px] text-BLACK font-openSans">
        website last updated on 29/09/2024
      </p>
    </div>
  );
};

export default Policy;
