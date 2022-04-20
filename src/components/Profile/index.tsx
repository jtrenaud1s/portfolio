import React from "react";

import profilePicture from "../../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="w-100 pb-10 pt-10 pl-3 pr-3 bg-azure-400 flex flex-col items-center text-white">
      <img
        className="mb-4"
        src={profilePicture}
        alt="Jordan Renaud"
        width={166}
        height={166}
      />
      <h1 className="text-3xl font-semibold mb-4">Jordan Renaud</h1>
      <p className="text-center mb-4">
        I’m a recent graduate from Southeast Missouri State University with a
        B.S. in Computer Science. I’m looking to get my foot into the door of
        the professional world of software engineering with a focus on full
        stack development technologies.
      </p>
      <div className="w-full pl-4 pr-4">
        <a
          href="mailto:jtrenaud1s@gmail.com"
          className="w-full text-center no-underline block bg-azure-600 w-100 p-2 hover:bg-azure-700 duration-300 ease-in-out transition-colors rounded">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Profile;
