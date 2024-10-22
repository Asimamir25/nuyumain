import React from "react";
import Infobar from "../../components/infobar/Infobar";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import WhyChoose from "../../components/whyChoose/WhyChoose";
import DreamSmile from "../../components/dreamSmile/DreamSmile";
import ReviewSection from "../../components/reviewSection/ReviewSection";
import Finance from "../../components/finance/Finance";
import Gallery from "../../components/gallery/Gallery";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Policy from "../../components/footer/Policy";
import PictureLayout from "../../components/pictureLayout/PictureLayout";

const Home = () => {
  return (
    <div>
      <Infobar />
      <Navbar />
      <Hero />
      <PictureLayout/>
      <WhyChoose />
      <DreamSmile />
      <ReviewSection />
      <Finance />
      <Gallery />
      <Contact />
      <Footer />
      <Policy />
    </div>
  );
};

export default Home;
