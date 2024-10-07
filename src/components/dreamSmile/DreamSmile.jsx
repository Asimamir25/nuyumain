import React, { useEffect, useRef } from "react";
import Pic1 from "../../assets/gridpic1.png";
import Pic2 from "../../assets/gridpic2.png";
import Pic3 from "../../assets/gridpic3.png";
import Pic4 from "../../assets/gridpic4.png";
import Pic5 from "../../assets/gridpic5.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DreamSmile() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

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
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        descriptionRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="p-6">
      {/* Responsive grid container for the cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Text Card */}
        <div className="col-span-1 lg:col-span-1 ">
          <h1
            ref={titleRef}
            className="font-openSans text-[50px] md:text-[56px] text-BLACK font-semibold leading-snug"
          >
            Sculpting your dream smile
          </h1>
          <p
            ref={subtitleRef}
            className="text-2xl font-openSans italic text-ITAICTEXT font-bold mb-2"
          >
            A wide range of treatments to help Invisalign you achieve your dream
            smile
          </p>
          <p ref={descriptionRef} className="text-lg font-openSans">
            Everyone’s smile is as unique as they are so our team works with
            each individual to understand the dream smile we can achieve for
            them.
          </p>
        </div>

        {/* Image Cards */}
        <div
          className="bg-cover bg-center relative h-[463px] group"
          style={{ backgroundImage: `url(${Pic1})` }}
        >
          <div className="absolute bottom-0 left-0 pl-6 pt-6 bg-[#9E7F61] pr-[50px] text-white font-sans pb-6 rounded-tr-lg max-w-[90%] w-[90%] transition-all duration-300 ease-in-out">
            <p className="text-lg font-semibold font-openSans">Invisalign</p>
            <p className="text-sm font-normal font-openSans text-WHITE overflow-hidden h-0 group-hover:h-[3rem] transition-height duration-500 ease-in-out">
              Discreet teeth straightening with an Invisalign Diamond Provider
            </p>
          </div>
        </div>

        <div
          className="bg-cover bg-center relative h-[463px] group"
          style={{ backgroundImage: `url(${Pic2})` }}
        >
          <div className="absolute bottom-0 left-0 pl-6 pt-6 bg-[#9E7F61] pr-[50px] text-white font-sans pb-6 rounded-tr-lg max-w-[90%] w-[90%] transition-all duration-300 ease-in-out">
            <p className="text-lg font-semibold font-openSans">Implants</p>
            <p className="text-sm font-normal font-openSans text-WHITE overflow-hidden h-0 group-hover:h-[3rem] transition-height duration-500 ease-in-out">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vero!
            </p>
          </div>
        </div>
        <div
          className="bg-cover bg-center relative h-[463px] group"
          style={{ backgroundImage: `url(${Pic3})` }}
        >
          <div className="absolute bottom-0 left-0 pl-6 pt-6 bg-[#9E7F61] pr-[50px] text-white font-sans pb-6 rounded-tr-lg max-w-[90%] w-[90%] transition-all duration-300 ease-in-out">
            <p className="text-lg font-semibold font-openSans">SmileFast Composite Bonding</p>
            <p className="text-sm font-normal font-openSans text-WHITE overflow-hidden h-0 group-hover:h-[3rem] transition-height duration-500 ease-in-out">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, optio.
            </p>
          </div>
        </div>
        <div
          className="bg-cover bg-center relative h-[463px] group"
          style={{ backgroundImage: `url(${Pic4})` }}
        >
         <div className="absolute bottom-0 left-0 pl-6 pt-6 bg-[#9E7F61] pr-[50px] text-white font-sans pb-6 rounded-tr-lg max-w-[90%] w-[90%] transition-all duration-300 ease-in-out">
            <p className="text-lg font-semibold font-openSans">Teeth Whitening</p>
            <p className="text-sm font-normal font-openSans text-WHITE overflow-hidden h-0 group-hover:h-[3rem] transition-height duration-500 ease-in-out">
              Discreet teeth straightening with an Invisalign Diamond Provider
            </p>
          </div>
        </div>
        <div
          className="bg-cover bg-center relative h-[463px] group"
          style={{ backgroundImage: `url(${Pic5})` }}
        >
          <div className="absolute bottom-0 left-0 pl-6 pt-6 bg-[#9E7F61] pr-[50px] text-white font-sans pb-6 rounded-tr-lg max-w-[90%] w-[90%] transition-all duration-300 ease-in-out">
            <p className="text-lg font-semibold font-openSans">General dentistry</p>
            <p className="text-sm font-normal font-openSans text-WHITE overflow-hidden h-0 group-hover:h-[3rem] transition-height duration-500 ease-in-out">
              Discreet teeth straightening with an Invisalign Diamond Provider
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamSmile;
