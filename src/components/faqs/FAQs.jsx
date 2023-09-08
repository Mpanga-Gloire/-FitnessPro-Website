import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

import SectionHead from "../sectionHead/SectionHead";
import { faqs } from "../../data";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead
          icon={<FaQuestionCircle />}
          title="Frequently Asked Questions"
        />
        <div className="faqs__wrapper">
          {faqs.map(({ id, question, answer }) => {
            return <FAQ question={question} answer={answer} key={id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
