import React from "react";
import Infobar from "./components/infobar/Infobar";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import WhyChoose from "./components/whyChoose/WhyChoose";
import DreamSmile from "./components/dreamSmile/DreamSmile";
import ReviewSection from "./components/reviewSection/ReviewSection";
import Finance from "./components/finance/Finance";
import Gallery from "./components/gallery/Gallery";
import PictureLayout from "./components/pictureLayout/PictureLayout";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Policy from "./components/footer/Policy";

const App = () => {
  return (
    <div>
      <Infobar />
      <Navbar />
      {/* <Hero /> */}
      <PictureLayout />
      <WhyChoose />
      <DreamSmile />
      <ReviewSection />
      <Finance />
      <Gallery />
      <Contact />
      <Footer />
      <Policy/>
    </div>
  );
};

export default App;
