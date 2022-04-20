import React from "react";
import { Github, Linkedin } from "react-bootstrap-icons";

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-between h-full w-16 text-4xl">
      <a href="https://github.com/jtrenaud1s">
        <Github className="text-2xl" />
      </a>
      <a href="https://www.linkedin.com/in/jordan-renaud-75a6751a4/">
        <Linkedin className="text-2xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
