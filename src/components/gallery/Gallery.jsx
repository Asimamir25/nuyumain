import React, { useEffect, useRef } from "react";
import Pic1 from "../../assets/gallerypic1.png";
import Pic2 from "../../assets/gallerypic2.png";
import Pic3 from "../../assets/gallerypic3.png";
import Pic4 from "../../assets/gallerypic4.png";
import Pic5 from "../../assets/gallerypic5.png";
import Pic6 from "../../assets/gallerypic6.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Gallery() {
  const imagesRef = useRef([]);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtitle Animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Image Animation
      const imageAnimation = (row) => {
        gsap.to(imagesRef.current[row], {
          x: -100,
          duration: 10,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              const el = imagesRef.current[row];
              const width = el.clientWidth;
              return parseFloat(x) % width;
            }),
          },
        });
      };

      imageAnimation(0); // Animate first row
      imageAnimation(1); // Animate second row
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-screen px-4 mt-4 w-full relative flex flex-col justify-evenly lg:justify-center overflow-hidden">
      {/* First Row of Images */}
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-row gap-3 animate-scroll-right-to-left">
          {[Pic1, Pic2, Pic3,Pic1, Pic2, Pic3,Pic1, Pic2, Pic3,].map((pic, index) => (
            <img
              key={`image-${index}-1`} 
              src={pic}
              alt={`pic ${index + 1}`}
              className="w-[100%] md:w-[33%] max-h-[460px] object-cover flex-shrink-0" 
              style={{ objectPosition: "20% 20%" }} // Center
            />
          ))}
        </div>
      </div>

      <div className="col-span-1 sm:col-span-3 text-center">
        <h2
          ref={subtitleRef}
          className="text-[32px] sm:text-[40px] my-3 lg:text-[40px] font-sans text-center"
        >
          NuSmiles delivered by NuYu Dental
        </h2>
      </div>

      {/* Second Row of Images */}
      <div className="relative w-full overflow-hidden ">
        <div className="flex flex-row gap-3 animate-scroll-left-to-right">
          {[Pic4, Pic5, Pic6,Pic4, Pic5, Pic6,].map((pic, index) => (
            <img
              key={`image-${index}-2`}
                           src={pic}
              alt={`pic ${index + 4}`}
              className="w-[100%] md:w-[33%] object-cover max-h-[460px] flex-shrink-0" 
                            style={{ objectPosition: "20% 20%" }} // Center
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
