import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Analyzing</h3>
              <p>
              In a wide range of subject areas, I have analyzed structured and unstructured data to extract actionable business insights.
              I love to craft stunning and clever visualizations that illustrate surprising results.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Developing</h3>
              <p>
              I specialize in deploying machine learning models into production-ready AI services. 
              My expertise in software engineering enables me to build scalable solutions that drive significant business value. 
              I focus on integrating and optimizing these models for impactful, real-world applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Communicating</h3>
              <p>
              Proficient in conveying complex data insights and technical concepts to both technical and non-technical stakeholders.
              Proficient in developing clear, impactful reports and visualizations.
              Skilled at turning data findings into clear, actionable recommendations to guide decision-making.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
