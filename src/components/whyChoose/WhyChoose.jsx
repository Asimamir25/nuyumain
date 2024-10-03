import React, { useEffect, useRef } from "react";
import backgroundImage from "../../assets/background.png";
import Calendar from "../../assets/calendar.svg";
import Batch from "../../assets/batch.svg";
import Location from "../../assets/location.svg";
import Doctor from "../../assets/doctor.svg";
import Finance from "../../assets/finance.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhyChoose() {
  const titleRef = useRef(null);
  const cardHeadingRefs = useRef([]);

  useEffect(() => {
    // Animate the title when it enters the viewport
    gsap.from(titleRef.current, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate each card heading when it enters the viewport
    cardHeadingRefs.current.forEach((heading, index) => {
      gsap.from(heading, {
        duration:1,
        y: 30,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.2, // Staggered effect
      });
    });
  }, []);

  return (
    <div
      className="w-full lg:h-full bg-cover bg-center py-4 font-sans"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1
      
        className="font-semibold text-3xl md:text-4xl lg:text-[56px] text-center pt-6 mb-5 font-openSans"
      >
        Why choose Nuyu?
      </h1>
      <div className="flex flex-wrap justify-center lg:mt-4">
        {/* First Row */}
        <div className="flex flex-wrap justify-center w-full">
          {/* Card 1 */}
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="px-4 py-6">
              <div className="flex justify-center">
                <img
                  src={Location}
                  className="w-[75px] sm:w-[100px] mb-3"
                  alt="Location"
                />
              </div>
              <h2
              
                className="title-font  text-lg sm:text-xl lg:text-2xl text-gray-900 text-center max-w-[350px] mx-auto font-openSans"
              >
                Luxury dental practice in an excellent location
              </h2>
            </div>
          </div>
          {/* Card 2 */}
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="px-4 py-6">
              <div className="flex justify-center">
                <img
                  src={Batch}
                  className="w-[75px] sm:w-[100px] mb-3"
                  alt="Batch"
                />
              </div>
              <h2
             
                className="title-font  text-lg sm:text-xl lg:text-2xl text-gray-900 text-center max-w-[350px] mx-auto font-openSans"
              >
                Highly trained in easing dental phobia
              </h2>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center w-full">
          {/* Card 3 */}
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="px-4 py-6">
              <div className="flex justify-center">
                <img
                  src={Calendar}
                  className="w-[75px] sm:w-[100px] mb-3"
                  alt="Calendar"
                />
              </div>
              <h2
             
                className="title-font  text-lg  font-openSans sm:text-xl lg:text-2xl text-gray-900 text-center max-w-[350px] mx-auto"
              >
                Evening & weekend Appointments
              </h2>
            </div>
          </div>
          {/* Card 4 */}
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="px-4 py-6">
              <div className="flex justify-center">
                <img
                  src={Doctor}
                  className="w-[75px] sm:w-[100px] mb-3"
                  alt="Doctor"
                />
              </div>
              <h2
              
                className="title-font  text-lg sm:text-xl lg:text-2xl text-gray-900 text-center max-w-[350px] font-openSans mx-auto"
              >
                Advanced dental techniques & Technology
              </h2>
            </div>
          </div>
          {/* Card 5 */}
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="px-4 py-6">
              <div className="flex justify-center">
                <img
                  src={Finance}
                  className="w-[75px] sm:w-[100px] mb-3"
                  alt="Finance"
                />
              </div>
              <h2
               
                className="title-font font-openSans text-lg sm:text-xl lg:text-2xl text-gray-900 text-center max-w-[350px] mx-auto"
              >
                Finance options & membership plans
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
