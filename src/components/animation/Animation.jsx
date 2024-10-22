// Loading.js
import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/dental.json'; // Update with your animation path

const Animation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default Animation;
