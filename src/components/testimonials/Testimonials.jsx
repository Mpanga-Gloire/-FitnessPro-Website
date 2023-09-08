import React, { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import SectionHead from "../sectionHead/SectionHead";
import { Card } from "../../UI";
import { testimonials } from "../../data";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const { name, quote, job, avatar } = testimonials[index];

  const handleClickLeft = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  // setInterval(handleClickLeft, 1000);

  const handleClickRight = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Customer Reviews"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimanial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__job">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button className="testimonials__btn">
            <IoIosArrowDropleftCircle onClick={handleClickLeft} />
          </button>
          <button className="testimonials__btn">
            <IoIosArrowDroprightCircle onClick={handleClickRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
