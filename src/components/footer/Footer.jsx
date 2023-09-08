import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            {/* <img src={Logo} alt="nav logo" /> */}
            Fitness<span>Hub</span>
          </Link>
          <p>
            Welcome to FitnessHub, where we empower you to transform your life
            through fitness and wellness. Join us on your fitness journey today!
          </p>
          <div className="footer__socials">
            <a href="" target="_blank" rel="noreferrer noopener">
              <FaLinkedinIn />
            </a>
            <a href="" target="_blank" rel="noreferrer noopener">
              <BiLogoFacebook />
            </a>
            <a href="" target="_blank" rel="noreferrer noopener">
              <AiOutlineTwitter />
            </a>
            <a href="" target="_blank" rel="noreferrer noopener">
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/plans">Fitness Plans</Link>
          <Link to="/trainers">Our Trainers</Link>
          <Link to="/gallery">Fitness Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </article>
        <article>
          <h4>Resources</h4>
          <Link to="/blog">Fitness Blog</Link>
          <Link to="/case-studies">Success Stories</Link>
          <Link to="/events">Upcoming Events</Link>
          <Link to="/community">Fitness Communities</Link>
          <Link to="/faqs">FAQs</Link>
        </article>
        <article>
          <h4>Contact Us</h4>
          <Link to="/contact">Get in Touch</Link>
          <Link to="/support">Customer Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2023 FitnessHub. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
