import React from "react";

import HeaderImage from "./../../images/header_bg_1.jpg";
import StoryImage from "./../../images/about1.jpg";
import VisionImage from "./../../images/about2.jpg";
import MissionImage from "./../../images/about3.jpg";
import { SectionHeader } from "../../components";
import "./about.css";

const About = () => {
  return (
    <>
      <SectionHeader title="Our Fitness Story" image={HeaderImage}>
        Welcome to our fitness journey. We are passionate about health and
        wellness, and our story reflects our commitment to a healthier
        lifestyle.
      </SectionHeader>
      <section className="about_story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Fitness Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Fitness Story</h1>
            <p>
              Our fitness journey began with a simple goal: to lead healthier
              lives and inspire others to do the same. We've experienced
              firsthand the transformative power of fitness, and it's our
              mission to share that experience with you.
            </p>
          </div>
        </div>
      </section>
      <section className="about_Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Fitness Vision</h1>
            <p>
              Our vision is clear: to create a world where fitness and wellness
              are accessible to all. We envision a community where people of all
              ages and backgrounds can embrace a healthier lifestyle.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Fitness Vision" />
          </div>
        </div>
      </section>
      <section className="about_Mission">
        <div className="container about__Mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Fitness Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Fitness Mission</h1>
            <p>
              Our mission is to empower individuals like you to take control of
              your health and well-being. We provide the guidance, support, and
              resources needed to embark on your fitness journey and achieve
              your goals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
