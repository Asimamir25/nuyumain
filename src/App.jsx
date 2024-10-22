import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Animation from "./components/animation/Animation"; // Import your loading component

// Lazy load the Main and Home components
const Main = lazy(() => import("./pages/main/Main"));
const Home = lazy(() => import("./pages/home/Home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Animation />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />

          {/* Add other routes here as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
