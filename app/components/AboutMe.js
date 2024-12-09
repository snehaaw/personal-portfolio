import React from "react";
import styles from "../style";
import Image from "next/image";

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
        
        <Image
          src="/char2.png"
          alt="About Me"
          width={800}
          height={300}
          style={{ width: "800px", height: "300px", borderRadius: "20%" }}
          className={`${styles.aboutPhoto}`}
        />
      </div>
      <div className={`${styles.aboutContent}`}>
        <div className={`${styles.sectionHeader}`}>
          <h2 className={`${styles.sectionTitle} text-white`}>About Me</h2>
          <p className={`${styles.sectionDescription}`}>
            I am currently in my second year at the Southern Alberta Institute of Technology (SAIT), pursuing my Software Development Diploma. Through my coursework, I have developed a solid foundation in the fundamental principles of various coding languages such as Java, Python and JavaScript. I have also gained hands-on experience in creating functional applications which has helped me hone my problem-solving and analytical skills.
          </p>
          <p className={`${styles.sectionDescription}`}>
            My passion for technology and innovation drives me to continuously learn and take on new challenges. I thrive in collaborative environments, and I am committed to applying my skills to create impactful projects that leave a positive mark.
          </p>
          
          <a
            href="/Sneha.docx.pdf"
            download
            className={`${styles.resumeButton}`}
          >
            Download Resume
          </a>
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
