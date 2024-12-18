import React from "react";
import styles from "../style";

const Home = () => {
  return (
    <section
      id="home"
      title="Home"
      className="w-full w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-teal-200 to-teal-600 overflow-x-hidden"
    >
      <div className={`${styles.homeContent} w-full max-w-full px-4`}>
        
        <h1 className={`${styles.heading} text-teal-800`}>
          Welcome to My Portfolio! 
        </h1>

        
        <h2 className={`${styles.subHeading} text-teal-700`}>
          I am Sneha, aspiring Software Developer
        </h2>

        
        <p className={`${styles.paragraph} text-teal-500`}>
          Passionate about building impactful solutions and inspiring others through
          innovation and collaboration. Exploring new opportunities and looking forward to create a better future together!
        </p>

        
        <button
          className={`${styles.knowMoreButton} bg-teal-700 hover:bg-teal-800 text-white hover:text-teal-100`}
          onClick={() =>
            document.getElementById("about_me").scrollIntoView({ behavior: "smooth" })
          }
        >
          Know More
        </button>
      </div>
    </section>
  );
};

export default Home;