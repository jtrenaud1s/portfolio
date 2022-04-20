import React from "react";
import Card from "../Card";

interface IProjectProps {
  name: string;
  tags: string[];
  image: string;
}

const Project: React.FC<IProjectProps> = ({ name, tags, image }) => {
  return (
    <div>
      <Card className="w-full flex flex-col items-center justify-between">
        <img src={image} className="w-full" />

        <span className="font-semibold text-xl pt-3 pb-3">{name}</span>
      </Card>
    </div>
  );
};

export default Project;
