import React from "react";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import { SectionHeader } from "../../components";
import HaederImage from "./../../images/header_bg_2.jpg";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <SectionHeader title="Get In Touch" image={HaederImage}>
        We'd love to hear from you! Feel free to reach out to us with any
        questions, feedback, or inquiries. Your input is invaluable as we
        continue to enhance your fitness experience.
      </SectionHeader>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="#" target="_blank">
              <MdEmail />
            </a>
            <a href="#" target="_blank">
              <BsMessenger />
            </a>
            <a href="#" target="_blank">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
