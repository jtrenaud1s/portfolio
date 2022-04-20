import React from "react";

const Footer = () => {
  return (
    <div className="text-center w-full pb-10 pt-10 pl-3 pr-3 bg-azure-400 text-white flex flex-col items-center justify-between">
      <img
        className="mb-4 w-20 rounded-full"
        src="./profile.jpg"
        alt="Jordan Renaud"
      />
      <h2 className="text-2xl">Hiring Junior Engineers?</h2>
      <div className="my-3">
        Are you looking to add a junior engineer to your full stack team? Send
        me an email at jtrenaud1s@gmail.com
      </div>
      <a
        href="mailto:jtrenaud1s@gmail.com"
        className="text-center no-underline block bg-azure-600 w-100 py-2 px-4 hover:bg-azure-700 duration-300 ease-in-out transition-colors rounded">
        Email Me
      </a>
    </div>
  );
};

export default Footer;
