import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const images = [
  'https://cdn.pixabay.com/photo/2024/05/29/21/16/dental-8797255_1280.png',
  'https://cdn.pixabay.com/photo/2014/11/27/20/15/treatment-room-548143_1280.jpg'
];

const Main = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="text-center relative z-10">
        <img 
          src="https://nuyu-swart.vercel.app/assets/img/Logo-white.png" 
          className="mb-4 filter invert brightness-0" 
          alt="Logo" 
        />
        <h1 className="text-white text-4xl font-openSans font-bold shadow-lg">
          YOUR SMILE
        </h1>
        <h1 className="text-white text-4xl font-openSans font-bold shadow-lg">
          OUR PASSION
        </h1>

        <div className="mt-8 flex justify-center space-x-4">
         <Link to='/home'>
         
         
         <button className="bg-transparent text-white px-4 py-2 rounded-full shadow-md border-white border-1 hover:bg-white transition">
         DENTAL SPA
          </button>
         </Link>
          <button className="bg-transparent text-white px-4 py-2 rounded-full shadow-md border-white border-1 px-4 py-2  shadow-md hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
