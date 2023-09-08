import React from "react";
import "./home.css";
import {
  FAQs,
  MainHeader,
  Programs,
  Testimonials,
  Values,
} from "../../components";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
