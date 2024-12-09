import React from "react";
import Image from 'next/image';


const Footer = () => {
  return (
    <div className="footer w-full px-8 py-8 flex justify-center items-center flex-col bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900">
      
      <div className="mx-auto text-4xl text-neutral-200 mb-6 space-x-12 flex">
        
        
        <div
          onClick={() => window.open("https://www.linkedin.com/in/sneha77/", "_blank")}
          className="cursor-pointer transition-all duration-300"
        >
          <Image
            src="/linkedinIcon.png"
            alt="LinkedIn"
            width={30} height={30}
            className="social-icon"
            style={{
              width: "30px",
              height: "30px",
              transition: "transform 0.3s",
            }}
          />
        </div>
        
        <div
          onClick={() => window.open("https://github.com/snehaaw", "_blank")}
          className="cursor-pointer transition-all duration-300"
        >
          <Image
            src="/githubIcon.png"
            alt="GitHub"
            width={30} height={30}
            className="social-icon"
            style={{
              width: "30px",
              height: "30px",
              transition: "transform 0.3s",
            }}
          />
        </div>
      </div>

      
      <span className="text-md text-center text-neutral-300">
        © 2024 Created with care by Sneha™
      </span>
    </div>
  );
};

export default Footer;
