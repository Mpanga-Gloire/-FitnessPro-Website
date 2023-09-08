import React from "react";

import { SectionHeader, Trainer } from "../../components";
import HeaderImage from "../../images/header_bg_5.jpg";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { trainers } from "../../data";
import "./trainers.css";

const Trainers = () => {
  return (
    <>
      <SectionHeader title="Our Trainers" image={HeaderImage}>
        Meet our dedicated team of fitness experts who are here to guide and
        inspire you on your fitness journey. They bring a wealth of experience
        and knowledge to help you achieve your goals.
      </SectionHeader>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebook />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
