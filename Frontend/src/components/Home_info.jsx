import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image1 from "../images/we do.png";
import image2 from "../images/prediction.png";
import image3 from "../images/effect.jpg";

const contentData = [
  {
    imageSrc:
    image1,
    title: "What do we do ?",
    text: "Discover more about space junk and learn about our mission to help collisionless landing of our spacecrafts.",
    link: "/analytics",
  },
  {
    imageSrc:
      image2,
    title: "Space Debris ",
    text: "Unveil the trajectory of celestial fragments and glimpse the potential scenarios that await if we don't navigate this challenge",
    link: "/Research",
  },
  {
    imageSrc:
      image3,
    title: "Effects and Solutions ",
    text:"Embark on a cosmic exploration and dive into some major effects of space debris, unraveling its impact on satellite technology and space missions through us.",
    link: "/Predict",
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
                <h2 className="gradient-text">{content.title}</h2>
                <p>{content.text}</p>
                <a
                  href={content.link}
                  rel="noopener noreferrer"
                >
                Learn more → 
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
