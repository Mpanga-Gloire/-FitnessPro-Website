import React from "react";
import { Link } from "react-router-dom";
import { FaPuzzlePiece } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";

import { programs } from "../../data";
import SectionHead from "../sectionHead/SectionHead";
import { Card } from "./../../UI";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaPuzzlePiece />} title="Our Fitness Programs" />
        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn more <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
