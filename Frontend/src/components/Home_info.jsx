import React, { Component, useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image1 from "../images/we do.png";
import image2 from "../images/prediction.png";
import image3 from "../images/effect.jpg";

const contentData = [
  {
    imageSrc:
    image1,
    title: "What are space debris and what does we do",
    text: "Discover more about space junk and learn about our mission to help collisionless landing of our spacecrafts.",
    link: "/Volunteer",
  },
  {
    imageSrc:
      image2,
    title: "what if space debris never comes to an end",
    text: "Discover our space debris prediction model.Take a moment to explore and gain insights into upcoming increase of the space junk.",
    link: "/Quiz",
  },
  {
    imageSrc:
      image3,
    title: "Effects and Solutions to all these queries",
    text: "Discover valuable awareness about the effects of hazards to the spacecrafts by debris. Explore our dedicated page to learn soloutions and giving suggestions for the problem .",
    link: "/Articles",
  },
];

function TextWrapper({ children }) {
  const text = useRef(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end "],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0.8]);
  const x = useTransform(scrollYProgress, [1, 0.6, 0], [0, 0, -1500]);

  return (
    <motion.div ref={text} className="text-section" style={{ opacity, x }}>
      {children}
    </motion.div>
  );
}

function Home_info() {
  return (
    <div className="container-home">
      {contentData.map((content, index) => (
        <div className="image-container-home" key={index}>
          <TextWrapper>
            <img
              src={content.imageSrc}
              alt={content.title}
              className="image-home"
            />
          </TextWrapper>
          <div className="text-container-home">
            <TextWrapper>
              <div className="text-box-home">
                <h2>{content.title}</h2>
                <p>{content.text}</p>
                <a
                  href={content.link}
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </div>
            </TextWrapper>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home_info;
