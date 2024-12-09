import React from "react";
import styles from "../style";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactForm}>
        <h2 className={styles.sectionTitle}>Contact Me</h2>
        <p className={styles.sectionDescription}>
          Have a question or want to get in touch? Fill out the form below, and I’ll get back to you as soon as possible!
        </p>
        <form action="#">
          <div className="mb-4">
            <label
              htmlFor="name"
              className={styles.formLabel}
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className={`${styles.formInput}`}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className={styles.formLabel}
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className={`${styles.formInput}`}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className={styles.formLabel}
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              className={`${styles.formInput}`}
              placeholder="Type your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.formButton}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
