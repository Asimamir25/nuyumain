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

const ImageScroll = () => {
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
    <div className=" container grid grid-cols-1 md:grid-cols-3  h-full w-screen overflow-hidden">
      {/* Left Column (Images) */}
      <div className="relative flex items-center justify-center ">
        <div className="flex flex-col gap-[12px] absolute animate-scroll">
          {imagesLeftColumn.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-[100%] h-auto hidden md:block"
            />
          ))}
        </div>
      </div>

      {/* Center Content (Text) */}
      <div className="w-full flex flex-col text-center items-center   mb-4 md:mb-0">
        <div className="mt-3">
          <h2
            ref={(el) => (titleRefs.current[0] = el)}
            className="text-[32px] md:text-[56px] font-bold font-openSans"
          >
            Your smile,
          </h2>
          <h2
            ref={(el) => (titleRefs.current[1] = el)}
            className="text-[32px] md:text-[56px] font-bold font-openSans"
          >
            Our passion
          </h2>
        </div>
        <p
          ref={(el) => (paragraphRefs.current[0] = el)}
          className="mt-2 text-[24px] text-[#9E7F618A] font-bold italic font-openSans"
        >
          Quality dental care in the heart of Cheltenham
        </p>
        <p
          ref={(el) => (paragraphRefs.current[1] = el)}
          className="text-center text-[14px] lg:[24px] 2xl:text-[40px] px-3 mt-[34px] font-openSans"
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
          className="text-[34px] font-normal mt-[32px] font-openSans"
        >
          New Smile, NuYu
        </h4>
        <div className="flex items-center mt-[27px]">
  <div className="flex px-6 py-3 rounded-md items-center gap-2 border border-[#9E7F61] group hover:bg-[#dac0a7] transition-colors ease-in">
    <p className="text-black group-hover:text-white transition-all duration-200">
      Meet the Team
    </p>
    <img
      src={Arrow}
      alt="arrow"
      className="h-4 group-hover:filter group-hover:brightness-0 group-hover:contrast-100 transition-all duration-200 cursor-pointer"
    />
  </div>
</div>

      </div>

      {/* Right Column (Images) */}
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col gap-[12px] absolute animate-scroll-reverse ">
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

export default ImageScroll;
