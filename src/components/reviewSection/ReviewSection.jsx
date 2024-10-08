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
      className="w-full lg:h-[606px] bg-cover bg-center py-1 font-sans flex flex-col lg:flex-row justify-between items-center md:px-[12.5%] px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 max-w-full lg:max-w-[50%] text-center lg:text-left">
        <h1
          ref={subtitleRef}
          className="font-openSans text-[32px] md:text-[50px] lg:text-[56px] text-BLACK mt-6"
        >
          What Our Patients Say About Us
        </h1>
        <img
          src={Quotes}
          alt="Quotes"
          className="mt-4 lg:mt-6 mx-auto lg:mx-0"
        />
        <p
          ref={subtitleRef}
          className="font-openSans text-[16px] md:text-[18px] text-GRAY font-normal mt-4 lg:mt-5 px-4 lg:px-0"
        >
          Purus turpis vivamus sem est blandit. In at egestas id sollicitudin
          mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed
          turpis tellus quisque tellus ipsum malesuada.
        </p>
        <p
          ref={titleRef}
          className="font-openSans text-[24px] md:text-[32px] text-BLACK font-semibold mt-6 lg:mt-10"
        >
          Jose Turner
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
        <div className="w-[300px] h-[400px] md:w-[465px] md:h-[552px]">
          <img
            src={Testimonial}
            alt="Testimonial"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
