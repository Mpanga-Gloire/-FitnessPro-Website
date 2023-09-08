import React from "react";
import { FaShieldAlt } from "react-icons/fa";

import Image from "./../../images/values-1.jpg";
import SectionHead from "../sectionHead/SectionHead";
import { values } from "../../data";
import { Card } from "../../UI";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="working" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<FaShieldAlt />} title="Our Core Values" />
          <p>
            At our core, we uphold these values that guide us towards a
            healthier and happier life:
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values__value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
