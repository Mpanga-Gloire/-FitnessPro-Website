import React from "react";

import { SectionHeader } from "../../components";
import HeaderImage from "./../../images/header_bg_3.jpg";
import "./gallery.css";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`./../../images/gallery${i}.jpg`));
  }
  return (
    <>
      <SectionHeader title="Our Gallery" image={HeaderImage}>
        Explore our fitness gallery to get a glimpse of the incredible journeys
        our members have embarked on. From amazing transformations to inspiring
        workouts, our gallery showcases the true essence of fitness success
        stories.
      </SectionHeader>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
