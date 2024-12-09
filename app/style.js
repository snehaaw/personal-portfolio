const styles = {
    // Layout Styles
    boxWidth: "xl:max-w-[1280px] w-full",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    paddingX: "sm:px-16 px-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    paddingY: "sm:py-20 py-10", // Increased spacing
  
  paragraph:
    "font-poppins font-normal text-teal-300 text-[18px] leading-[28px] sm:leading-[30px] mt-4",
    

     // Experience Section Styles
  experienceSection:
  "flex items-center justify-center w-screen min-h-screen bg-gradient-to-b from-lime-300 to-teal-800 overflow-x-hidden",

experienceCard:
  "bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-[300px] transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600",
    // Typography Styles
    heading:
      "font-poppins font-semibold text-[36px] text-black leading-[50px] sm:text-[48px] sm:leading-[67.2px] text-center",
    subHeading:
      "font-poppins font-semibold text-[30px] text-blue-400 leading-[40px] sm:text-[40px] sm:leading-[60px] text-center mt-4",
    
    textCenter: "text-center",
  
    // Utilities
    section: "flex flex-col items-center justify-center w-full",
    sectionCenter: "flex flex-col items-center justify-center w-full px-6",

    homeSection:
    "h-screen w-full flex flex-col items-center justify-center px-6 bg-gradient-to-b from-emerald-700 via-teal-800 to-gray-900 overflow-hidden",
  homeContent: "max-w-screen-lg mx-auto text-center",
  knowMoreButton:
    "mt-8 bg-teal-600 hover:bg-emerald-500 text-white text-[16px] py-3 px-8 rounded-lg font-medium shadow-md transition-all duration-300",
    

    // About Section
  aboutSection:
  "flex flex-col items-center justify-center w-screen min-h-screen px-6 py-16 sm:py-20 bg-gradient-to-b from-teal-600 via-teal-500 to-lime-300 text-white overflow-x-hidden",
aboutContainer:
  "flex flex-col md:flex-row items-center justify-center max-w-[1200px] w-full gap-8",
aboutContent: "flex flex-col md:w-2/3 text-left",
photoArea: "w-full md:w-1/3 flex justify-center",
aboutPhoto:
  "rounded-full shadow-lg max-w-[200px] sm:max-w-[250px] border-4 border-emerald-500",

// Highlight Cards
highlightsContainer: "grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8",
highlightCard:
  "bg-gradient-to-br from-teal-700 to-emerald-600 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300",
highlightContent: "text-center",
highlightHeading: "text-[20px] font-semibold text-white mb-2",
highlightDescription: "text-[16px] text-gray-200 leading-[24px]",

// Section Header
sectionHeader: "text-center mb-10",
sectionTitle: "text-[36px] sm:text-[48px] font-bold text-white mb-4",
sectionDescription:
  "text-[18px] sm:text-[20px] text-gray-300 leading-[28px] sm:leading-[32px] max-w-[700px] mx-auto",
resumeButton:
  "mt-6 bg-blue-600 hover:bg-blue-700 text-white text-[16px] py-3 px-6 rounded-lg font-medium shadow-lg transition-all duration-300",


  
 // Projects Section Styles
 projectsSection:
 "flex items-center justify-center w-screen min-h-screen bg-gradient-to-b from-teal-800 via-teal-700 to-gray-900 overflow-x-hidden", // Ensure no overflow
projectsGrid:
 "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 w-full max-w-[1280px] px-4",
projectCard:
 "flex flex-col p-4 rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600",
projectButton:
 "px-6 py-2 text-white font-medium text-[16px] rounded-lg shadow-md transition-all duration-300",

// General Layout
section: "flex flex-col items-center justify-center w-full",

// Typography
sectionTitle: "text-[32px] sm:text-[40px] font-bold text-teal-300 mb-6 text-center",
sectionDescription: "text-[16px] sm:text-[18px] text-gray-300 mb-8 text-center max-w-[600px] mx-auto",

// Contact Section
contactSection: "w-full w-screen min-h-screen bg-gradient-to-b from-gray-900 via-teal-800 to-teal-700 px-6 py-12 sm:py-20 overflow-x-hidden",
contactForm: "w-full max-w-screen-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg",

formLabel: "text-gray-200 text-sm font-medium mb-2 block",
formInput:
  "w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-400",
formButton:
  "bg-teal-600 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-teal-500 transition-all duration-300 mt-4 float-right",
      
  };
  
  export const layout = {
    section: "flex flex-col md:flex-row items-center justify-between sm:py-16 py-6",
    sectionReverse: "flex flex-col-reverse md:flex-row items-center sm:py-16 py-6",
    sectionInfo: "flex-1 flex flex-col justify-center items-start px-6",
    sectionImg: "flex-1 flex justify-center items-center relative",
    sectionImgReverse: "flex-1 flex justify-center items-center relative md:mr-10",
  };
  
  export default styles;
  