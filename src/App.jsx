import React, { Suspense, lazy } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy load your components
const Infobar = lazy(() => import("./components/infobar/Infobar"));
const Hero = lazy(() => import("./components/hero/Hero"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const WhyChoose = lazy(() => import("./components/whyChoose/WhyChoose"));
const DreamSmile = lazy(() => import("./components/dreamSmile/DreamSmile"));
const ReviewSection = lazy(() => import("./components/reviewSection/ReviewSection"));
const Finance = lazy(() => import("./components/finance/Finance"));
const Gallery = lazy(() => import("./components/gallery/Gallery"));
const PictureLayout = lazy(() => import("./components/pictureLayout/PictureLayout"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Policy = lazy(() => import("./components/footer/Policy"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Infobar />
        <Navbar />
        <Hero />
        <PictureLayout />
        <WhyChoose />
        <DreamSmile />
        <ReviewSection />
        <Finance />
        <Gallery />
        <Contact />
        <Footer />
        <Policy />
      </Suspense>
    </div>
  );
};

export default App;
