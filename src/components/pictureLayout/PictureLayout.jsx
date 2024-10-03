// import React from "react";
// import Lady from "../../assets/lady1.png";
// import Lady2 from "../../assets/lady2.png";
// import Lady3 from "../../assets/lady3.png";
// import Lady4 from "../../assets/lady4.png";
// import Lady5 from "../../assets/lady5.png";
// import Lady6 from "../../assets/lady6.png";
// import Arrow from "../../assets/arrowright.svg";


// const PictureLayout = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between px-5 ">
//       <div className="flex flex-col justify-between w-full md:w-[27%] mb-4 md:mb-0">
//         <img src={Lady} alt="Image 1" className="w-full md:w-[100%] mb-2" />
//         <img src={Lady2} alt="Image 2" className="w-full  md:w-[100%] mb-2" />
//         <img src={Lady3} alt="Image 3" className="w-full  md:w-[100%] mb-2" />
//       </div>

//       <div className="w-full md:w-[40%] flex flex-col text-center items-center justify-center  mb-4 md:mb-0">
//         <h2 className="text-[32px] md:text-[56px] font-bold">Your smile,</h2>
//         <h2 className="text-[32px] md:text-[56px] font-bold"> our passion</h2>

//         <p className="mt-2 text-[24px] text-[#9E7F618A] font-bold italic">
//         Quality dental care in the heart of Cheltenham
//         </p>
//         <p className="text-center text-[24px] mt-[34px]">
//         At NuYu Dental, we believe in the power of a healthy smile. Our experienced team offers personalised care using the latest technology in a friendly, welcoming environment. Whether it's a routine check-up or a complex procedure, we prioritise your comfort and satisfaction. Experience compassionate, comprehensive dental care with NuYu Dental, and let us help you achieve the smile you've always wanted
//         </p>
//         <h4 className="text-[34px] font-normal mt-[32px]">
//         New Smile, NuYu
//         </h4>
//         <div className="flex items-center mt-[57px] ">
//         <div className=" flex px-[24px] sm:px-[30px] md:px-[40px] py-[12px] sm:py-[18px] md:py-[23px] rounded-[5px] items-center gap-2 border border-[#9E7F61]">
//           <p className="text-black">
//           Meet the Team
//           </p>
//           <img src={Arrow} alt="arrow" className="h-4 sm:h-5 md:h-6" />
//         </div>
//       </div>
//       </div>

//       <div className="flex flex-col justify-between bg-black w-full md:w-[27%]">
//         <img src={Lady4} alt="Image 4" className="w-full  md:w-[100%] mb-2" />
//         <img
//           src={Lady5}
//           alt="Image 5"
//           className="w-full  md:w-[100%] mb-2"
//         />
//         <img src={Lady6} alt="Image 6" className="w-full md:w-[100%] mb-2" />
//       </div>
//     </div>
//   );
// };

// export default PictureLayout;
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4 px-2 md:px-5">
    {/* Left Column */}
    <div className="flex flex-col justify-between md:justify-center w-full mb-4 md:mb-0">
      <img src={Lady} alt="Image 1" className="w-full mb-2" />
      <img src={Lady2} alt="Image 2" className="w-full mb-2" />
      <img src={Lady3} alt="Image 3" className="w-full mb-2" />
    </div>
  
    {/* Center Content */}
    <div className="w-full flex flex-col text-center items-center justify-between  mb-4 md:mb-0">
      <div className="mt-3">
      <h2 ref={(el) => (titleRefs.current[0] = el)} className="text-[32px] md:text-[56px]  font-bold font-openSans">Your smile,</h2>
      <h2 ref={(el) => (titleRefs.current[1] = el)} className="text-[32px] md:text-[56px] font-bold font-openSans">Our passion</h2>
      </div>
      <p ref={(el) => (paragraphRefs.current[0] = el)} className="mt-2 text-[24px] text-[#9E7F618A] font-bold italic font-openSans">
        Quality dental care in the heart of Cheltenham
      </p>
      <p ref={(el) => (paragraphRefs.current[1] = el)} className="text-center text-[24px] lg:[24px]  2xl:text-[40px] mt-[34px] font-openSans">
        At NuYu Dental, we believe in the power of a healthy smile. Our experienced team offers personalised care using the latest technology in a friendly, welcoming environment. Whether it's a routine check-up or a complex procedure, we prioritise your comfort and satisfaction. Experience compassionate, comprehensive dental care with NuYu Dental, and let us help you achieve the smile you've always wanted.
      </p>
      <h4 ref={(el) => (titleRefs.current[2] = el)} className="text-[34px] font-normal mt-[32px] font-openSans">
        New Smile, NuYu
      </h4>
      <div className="flex items-center mt-[57px]">
        <div className="flex px-[24px] sm:px-[30px] md:px-[40px] py-[12px] sm:py-[18px] md:py-[23px] rounded-[5px] items-center gap-2 border border-[#9E7F61] font-openSans">
          <p className="text-black font-openSans">Meet the Team</p>
          <img src={Arrow} alt="arrow" className="h-4 sm:h-5 md:h-6" />
        </div>
      </div>
    </div>
  
    {/* Right Column */}
    <div className="flex flex-col md:flex-row  xl:flex-col    xl:gap-0 w-full md:mb-0">
      <img src={Lady4} alt="Image 4" className="md:w-[70%] mb-2 xl:w-full " />
      <img src={Lady5} alt="Image 5" className=" md:w-[70%] mb-2 xl:w-full " />
      <img src={Lady6} alt="Image 6" className=" md:w-[70%] mb-2 xl:w-full" />
    </div>
  </div>
  
  );
};

export default PictureLayout;
