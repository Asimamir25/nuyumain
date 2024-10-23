import React, { useEffect, useRef } from "react";
import backgroundImage from "../../assets/background2.png";
import Quotes from "../../assets/doublequotes.svg";
import Testimonial from "../../assets/testimonial.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function ReviewSection() {
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
            start: "top 115%",
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
            start: "top 100%",
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
    <div
      className="w-full h-[100%] py-10 bg-cover bg-center  justify-evenly font-sans flex flex-col md:flex-row items-center  px-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Text Section */}
      <div className="w-full max-w-full lg:max-w-[50%]  lg:text-left">
        <h1
          ref={subtitleRef}
          className="font-openSans text-[32px] md:text-[50px] lg:text-[56px] text-BLACK mt-6"
        >
          What Our Patients Say About Us
        </h1>
        <img
          src={Quotes}
          alt="Quotes"
          className="mt-4 lg:mt-6  lg:mx-0"
        />
        <p
          ref={subtitleRef}
          className="font-openSans text-[16px] md:text-[18px] text-GRAY font-normal mt-4 lg:mt-5 lg:px-0"
        >
          Purus turpis vivamus sem est blandit. In at egestas id sollicitudin
          mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed
          turpis tellus quisque tellus ipsum malesuada.
        </p>
        <p
          ref={titleRef}
          className="font-openSans text-[24px] md:text-[32px]  text-BLACK font-semibold mt-6 lg:mt-10"
        >
          Jose Turner
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[27%] flex   mt-6 lg:mt-0">
        
          <img
            src={Testimonial}
            alt="Testimonial"
            className="w-auto h-[440px] object-cover"
          />
        </div>
      
    </div>
  );
}

export default ReviewSection;
