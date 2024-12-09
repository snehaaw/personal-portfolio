import React from "react";


const Footer = () => {
  return (
    <div className="footer w-full px-8 py-8 flex justify-center items-center flex-col bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900">
      {/* Social Media Links */}
      <div className="mx-auto text-4xl text-neutral-200 mb-6 space-x-12 flex">
        
        
        <div
          onClick={() => window.open("https://www.linkedin.com/in/snehaaw/", "_blank")}
          className="cursor-pointer transition-all duration-300"
        >
          <img
            src="/linkedinIcon.png"
            alt="LinkedIn"
            className="social-icon"
            style={{
              width: "30px",
              height: "30px",
              transition: "transform 0.3s",
            }}
          />
        </div>
        {/* GitHub Logo */}
        <div
          onClick={() => window.open("https://github.com/snehaaw", "_blank")}
          className="cursor-pointer transition-all duration-300"
        >
          <img
            src="/githubIcon.png"
            alt="GitHub"
            className="social-icon"
            style={{
              width: "30px",
              height: "30px",
              transition: "transform 0.3s",
            }}
          />
        </div>
      </div>

      {/* Copyright Text */}
      <span className="text-md text-center text-neutral-300">
        © 2024 Created with care by Sneha™
      </span>
    </div>
  );
};

export default Footer;
