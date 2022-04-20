import React from "react";

import profilePicture from "../../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="w-full pb-10 pt-10 pl-3 pr-3 bg-azure-400 text-white">
      <div className="w-full flex flex-col md:grid md:grid-cols-4 items-center md:container md:mx-auto">
        <img
          className="mb-4 w-44 md:w-60 md:m-auto md:col-span-1"
          src={profilePicture}
          alt="Jordan Renaud"
        />
        <div className="text-center md:text-left md:col-span-3">
          <h1 className="text-4xl font-semibold mb-4">Jordan Renaud</h1>
          <p className="mb-4">
            I’m a recent graduate from Southeast Missouri State University with
            a B.S. in Computer Science. I’m looking to get my foot into the door
            of the professional world of software engineering with a focus on
            full stack development technologies.
          </p>
          <div className="w-full px-4 md:px-0 md:w-32">
            <a
              href="mailto:jtrenaud1s@gmail.com"
              className="w-full text-center no-underline block bg-azure-600 w-100 p-2 hover:bg-azure-700 duration-300 ease-in-out transition-colors rounded">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
