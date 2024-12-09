import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about_me", title: "About Me" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg fixed top-0 left-0 z-50 m-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
        
        <div className="text-white font-extrabold text-xl cursor-pointer">
          MyPortfolio
        </div>

        
        <ul className="hidden sm:flex flex-1 justify-end items-center space-x-6">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] transition-all duration-300 ${
                active === nav.title
                  ? "text-gray-300 underline underline-offset-4"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

       
        <div
          className="sm:hidden flex items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-6 h-6 flex flex-col justify-between items-center transform transition-transform ${
              isOpen ? "rotate-45" : ""
            }`}
          >
           
            <div
              className={`h-1 w-6 bg-white rounded transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`h-1 w-6 bg-white rounded transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-1 w-6 bg-white rounded transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </div>
      </div>

      
      <div
        className={`absolute top-16 right-0 left-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg p-4 transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium text-[16px] cursor-pointer transition-colors ${
                active === nav.title
                  ? "text-gray-300"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => {
                setActive(nav.title);
                setIsOpen(false);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
