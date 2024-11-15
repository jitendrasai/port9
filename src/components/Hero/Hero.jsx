import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Jitendra Sai Vigrahala</h1>
        <p className={styles.description}>
        An analytical thinker with a strong foundation in software engineering and data science, skilled in Python, SQL, data structures, algorithms, and problem-solving.
        With one year of experience in designing scalable applications, deploying cloud-based solutions, and implementing machine learning algorithms.
        Proficient in data analysis, statistical modeling, and automation, with a focus on solving complex problems and delivering efficient, innovative solutions.
        </p>
        <a href="mailto:jitendrasai333@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
