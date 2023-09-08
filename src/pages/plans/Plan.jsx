import React from "react";

import { SectionHeader } from "../../components";
import HeaderImage from "./../../images/header_bg_4.jpg";
import { Card } from "../../UI";
import { plans } from "../../data";
import "./plan.css";

const Plan = () => {
  return (
    <>
      <SectionHeader title="Membership Plans" image={HeaderImage}>
        Explore our membership plans designed to help you achieve your fitness
        goals. Whether you're a beginner or an experienced fitness enthusiast,
        we have the perfect plan for you. Join us on this fitness journey and
        unlock a healthier, stronger you!
      </SectionHeader>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : " "}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plan;
