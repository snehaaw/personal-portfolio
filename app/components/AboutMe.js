import React from "react";
import styles from "../style";
import Image from 'next/image';



const HighlightCard = ({ heading, description }) => (
  <div className={`${styles.highlightCard}`}>
    <div className={`${styles.highlightContent}`}>
      <h4 className={`${styles.highlightHeading}`}>{heading}</h4>
      <p className={`${styles.highlightDescription}`}>{description}</p>
    </div>
  </div>
);

const AboutMe = () => (
  <section id="about_me" className={`${styles.aboutSection}`}>
    <div className={`${styles.aboutContainer}`}>
      <div className={`${styles.photoArea}`}>
        {/* Replace with your image URL */}
        <Image
          src='/char2.png'
          alt="About Me"
          width={800} height={300}
          style={{ width: "800px", height: "300px", borderRadius: "20%" }}
          className={`${styles.aboutPhoto}`}
        />
      </div>
      <div className={`${styles.aboutContent}`}>
        <div className={`${styles.sectionHeader}`}>
          <h2 className={`${styles.sectionTitle}`}>About Me</h2>
          <p className={`${styles.sectionDescription}`}>
            I am a driven individual who believes in making a difference through collaboration and continuous learning. By embracing challenges, sharing expertise, and working on impactful projects, I aim to leave a positive mark.
          </p>
          <button className={`${styles.resumeButton}`}>Download Resume</button>
        </div>

        <div className={`${styles.highlightsContainer}`}>
          <HighlightCard
            heading="Teamwork"
            description="Thriving in team environments, I focus on leveraging diverse perspectives to achieve outstanding results."
          />
          <HighlightCard
            heading="Lifelong Learning"
            description="I embrace the journey of continuous improvement, gaining new skills and adapting to evolving challenges."
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
