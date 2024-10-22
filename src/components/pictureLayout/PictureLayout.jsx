import React, { useEffect, useRef } from "react";
import Lady from "../../assets/lady1.png";
import Lady2 from "../../assets/lady2.png";
import Lady3 from "../../assets/lady3.png";
import Lady4 from "../../assets/lady4.png";
import Lady5 from "../../assets/lady5.png";
import Lady6 from "../../assets/lady6.png";
import Arrow from "../../assets/arrowright.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PictureLayout = () => {
  const imagesLeftColumn = [
    Lady,
    Lady2,
    Lady3,
    Lady,
    Lady2,
    Lady3,
    Lady,
    Lady2,
    Lady3,
    Lady,
    Lady2,
    Lady3,
  ];
  const imagesRightColumn = [
    Lady6,
    Lady5,
    Lady4,
    Lady6,
    Lady5,
    Lady4,
    Lady6,
    Lady5,
    Lady4,
    Lady6,
    Lady5,
    Lady4,
  ];

  const titleRefs = useRef([]);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    titleRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: -50 }, // Initial state
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%", // Trigger when the top of the element hits 80% of the viewport
              toggleActions: "play none none reverse", // Play on enter, none on leave
            },
          }
        );
      }
    });

    paragraphRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 }, // Initial state
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%", // Trigger when the top of the element hits 80% of the viewport
              toggleActions: "play none none reverse", // Play on enter, none on leave
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 h-full w-full overflow-hidden">
      {/* Left Column (Images) */}
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col gap-2 absolute animate-scroll">
          {imagesLeftColumn.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto hidden md:block"
            />
          ))}
        </div>
      </div>

      {/* Center Content (Text) */}
      <div className="w-full flex flex-col text-center items-center mb-4 md:mb-0">
        <div className="mt-3">
          <h2
            ref={(el) => (titleRefs.current[0] = el)}
            className="text-32 md:text-56 font-bold font-openSans"
          >
            Your smile,
          </h2>
          <h2
            ref={(el) => (titleRefs.current[1] = el)}
            className="text-32 md:text-56 font-bold font-openSans"
          >
            Our passion
          </h2>
        </div>
        <p
          ref={(el) => (paragraphRefs.current[0] = el)}
          className="mt-2 text-24 text-[#9E7F618A] px-4 font-bold italic font-openSans"
        >
          Quality dental care in the heart of Cheltenham
        </p>
        <p
          ref={(el) => (paragraphRefs.current[1] = el)}
          className="text-center text-14 lg:text-24 2xl:text-40 px-3 mt-8 font-openSans"
        >
          At NuYu Dental, we believe in the power of a healthy smile. Our
          experienced team offers personalised care using the latest technology
          in a friendly, welcoming environment. Whether it's a routine check-up
          or a complex procedure, we prioritise your comfort and satisfaction.
          Experience compassionate, comprehensive dental care with NuYu Dental,
          and let us help you achieve the smile you've always wanted.
        </p>
        <h4
          ref={(el) => (titleRefs.current[2] = el)}
          className="text-34 font-normal mt-8 font-openSans"
        >
          New Smile, NuYu
        </h4>
        <div className="flex items-center mt-7">
          <div className="flex px-6 py-3 rounded-md items-center justify-center gap-2 border border-[#9E7F61] group hover:bg-[#dac0a7] transition-colors ease-in">
            <button className="text-black group transition-all duration-200">
              <span className="group-hover:text-white font-openSans">Meet the Team</span>
            </button>
            <img
              src={Arrow}
              alt="arrow"
              className="h-4 mt-1 transition-all duration-200 cursor-pointer group-hover:fill-current group-hover:hidden"
            />
          </div>
        </div>
      </div>

      {/* Right Column (Images) */}
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col gap-2 absolute animate-scroll-reverse">
          {imagesRightColumn.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto hidden md:block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureLayout;
