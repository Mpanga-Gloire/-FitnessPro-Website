import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Gallery,
  Home,
  NotFound,
  Plans,
  Trainers,
} from "./pages/";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
