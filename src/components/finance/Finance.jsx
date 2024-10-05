import React, { useEffect, useRef } from "react";
import backgroundImage from "../../assets/background3.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Finance() {
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
            toggleActions: "play none none none",
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
            toggleActions: "play none none none",
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
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <div
      className="h-[600px] sm:h-[500px] md:h-[450px] lg:h-[550px] bg-cover bg-center font-sans mx-4 md:mx-[12.5%] bg-slate-300 flex justify-center lg:justify-end mt-5"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white w-[90%] sm:w-[70%] h-[330px] md:w-[60%] lg:w-[392px] p-2 lg:h-[320px] lg:mr-7 flex flex-col ">
        <p  ref={descriptionRef} className=" font-openSans text-[24px] sm:text-[22px] md:text-[40px] lg:text-[36px] font-bold px-4 mb-3 lg:px-11">
          Making Dentistry Affordable
        </p>
        <div className="px-2 lg:px-5">
          <p   ref={descriptionRef} className=" font-openSans text-[14px] sm:text-[16px] md:text-[18px]  font-normal">
            No one should have to compromise on the health or the look of their
            smile.
          </p>
          <p   ref={titleRef} className="text-[14px] sm:text-[16px] md:text-[18px] font-openSans mt-2 font-normal">
            So we’ve worked with the country’s leading providers to bring you
            dental plans and finance offerings to make your dream smile a
            reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Finance;
