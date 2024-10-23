import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const images = [
  'https://img.freepik.com/free-photo/dental-cabinet-with-various-medical-equipment_140725-7678.jpg?t=st=1729621230~exp=1729624830~hmac=40ed29f4ef5f27fbdd0e4644a6d7206bebeb1e21dff05bc6585e6671c6b68407&w=826',
  'https://img.freepik.com/free-photo/dental-clinic-interior-with-modern-dentistry-equipment-orange-color-stomatology-cabinet-with-nobody-it-orange-equipment-oral-treatment_482257-12486.jpg?t=st=1729620952~exp=1729624552~hmac=8bb78a14ae042dcefb02ca7b6cfeac68324c911eaf17ea2ca552a5c3e626f1ca&w=826',
  'https://img.freepik.com/free-photo/full-equiped-medical-cabinet_1303-23913.jpg?t=st=1729620123~exp=1729623723~hmac=9c73b2b6a8b90a45b915ee467dab249a384fbff81da859dc985ca49dc4e01b6e&w=826',
  'https://img.freepik.com/free-photo/dentist-doing-dental-treatment-intervention-senior-woman-elderly-patient-medical-examination-with-dentist-dental-office-with-orange-equipment_482257-12560.jpg?t=st=1729620171~exp=1729623771~hmac=e946eaccebaedd820bcea8ea110bc45b2005f5ab53448d8c0e1e26ea0f323b83&w=826'
];

const Main = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImage(prevImage => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setFade(false);
      }, 500); // Match this with the CSS transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full h-screen flex items-center justify-center relative bg-cover bg-no-repeat bg-center transition-opacity duration-500 ${fade ? 'opacity-83' : 'opacity-100'}`}
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
            <button className="bg-transparent text-white px-4 py-2 rounded-full shadow-md border border-white hover:bg-white hover:text-black transition">
              DENTAL SPA
            </button>
          </Link>
          <button className="bg-transparent text-white px-4 py-2 rounded-full shadow-md border border-white hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
