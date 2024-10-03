// import React, { useEffect, useRef } from "react";
// import Pic1 from "../../assets/gallerypic1.png";
// import Pic2 from "../../assets/gallerypic2.png";
// import Pic3 from "../../assets/gallerypic3.png";
// import Pic4 from "../../assets/gallerypic4.png";
// import Pic5 from "../../assets/gallerypic5.png";
// import Pic6 from "../../assets/gallerypic6.png";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function Gallery() {
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const descriptionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         subtitleRef.current,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           scrollTrigger: {
//             trigger: subtitleRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="p-6">
//       {/* Responsive grid layout for the images */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
//         {/* Image Cards */}
//         <div className="w-full max-h-[530px]">
//           <img 
//             src={Pic1} 
//             alt="pic" 
//             className="object-cover w-full h-full max-h-[530px]" 
//             style={{ objectPosition: "50% 50%" }} // Center
//           />
//         </div>
//         <div className="w-full max-h-[530px]">
//           <img 
//             src={Pic2} 
//             alt="pic" 
//             className="object-cover w-full h-full max-h-[530px]" 
//             style={{ objectPosition: "50% 0%" }} // Top Center
//           />
//         </div>
//         <div className="w-full max-h-[530px]">
//           <img 
//             src={Pic3} 
//             alt="pic" 
//             className="object-cover w-full h-full max-h-[530px]" 
//             style={{ objectPosition: "50% 100%" }} // Bottom Center
//           />
//         </div>
//         <div className="w-full max-h-[530px]">
//           <img 
//             src={Pic4} 
//             alt="pic" 
//             className="object-cover w-full h-full max-h-[530px]" 
//             style={{ objectPosition: "0% 50%" }} // Left Center
//           />
//         </div>
//         <div className="w-full max-h-[530px]">
//           <img 
//             src={Pic5} 
//             alt="pic" 
//             className="object-cover w-full h-full max-h-[530px]" 
//             style={{ objectPosition: "100% 50%" }} // Right Center
//           />
//         </div>
//         <div className="w-full max-h-[530px]">
//           <img 
//             src={Pic6} 
//             alt="pic" 
//             className="object-cover w-full h-full max-h-[530px]" 
//             style={{ objectPosition: "50% 50%" }} // Center
//           />
//         </div>
//       </div>

//       <p
//         ref={subtitleRef}
//         className="text-[32px] sm:text-[40px] lg:text-[56px] font-sans font-bold mb-4 text-center mt-6"
//       >
//         NuSmiles delivered by NuYu Dental
//       </p>
//     </div>
//   );
// }

// export default Gallery;
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
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="p-6">
      {/* Responsive grid layout for the images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
        {/* First Row of Images */}
        <div className="w-full max-h-[530px]">
          <img 
            src={Pic1} 
            alt="pic" 
            className="object-cover w-full h-full max-h-[530px]" 
            style={{ objectPosition: "50% 50%" }} // Center
          />
        </div>
        <div className="w-full max-h-[530px]">
          <img 
            src={Pic2} 
            alt="pic" 
            className="object-cover w-full h-full max-h-[530px]" 
            style={{ objectPosition: "50% 0%" }} // Top Center
          />
        </div>
        <div className="w-full max-h-[530px]">
          <img 
            src={Pic3} 
            alt="pic" 
            className="object-cover w-full h-full max-h-[530px]" 
            style={{ objectPosition: "50% 100%" }} // Bottom Center
          />
        </div>

        {/* Heading between the two groups of images */}
        <div className="col-span-1 sm:col-span-3 text-center mt-6">
          <h2   className="text-[32px] sm:text-[40px] lg:text-[56px] font-sans font-bold mb-4 text-center mt-6">NuSmiles delivered by NuYu Dental</h2>
        </div>

        {/* Second Row of Images */}
        <div className="w-full max-h-[530px]">
          <img 
            src={Pic4} 
            alt="pic" 
            className="object-cover w-full h-full max-h-[530px]" 
            style={{ objectPosition: "0% 50%" }} // Left Center
          />
        </div>
        <div className="w-full max-h-[530px]">
          <img 
            src={Pic5} 
            alt="pic" 
            className="object-cover w-full h-full max-h-[530px]" 
            style={{ objectPosition: "100% 50%" }} // Right Center
          />
        </div>
        <div className="w-full max-h-[530px]">
          <img 
            src={Pic6} 
            alt="pic" 
            className="object-cover w-full h-full max-h-[530px]" 
            style={{ objectPosition: "50% 50%" }} // Center
          />
        </div>
      </div>

     
    </div>
  );
}

export default Gallery;
