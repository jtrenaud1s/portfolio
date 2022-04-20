import React, { useState } from "react";
import Card from "../Card";
import Chip from "../Chip";

interface IProjectProps {
  name: string;
  tags: string[];
  image: string;
  summary: string;
  link: string;
}

const Project: React.FC<IProjectProps> = ({
  name,
  tags,
  image,
  summary,
  link,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-10">
      <Card className="w-full flex flex-col items-center justify-between pb-5">
        <div className="relative w-full">
          <img src={image} className="w-full" alt={name}></img>
          <div
            className={` overflow-y-auto text-white p-4 text-semibold transition-all duration-300 absolute left-0 top-0 w-full h-full bg-azure-500 ${
              show ? "opacity-100" : "opacity-0"
            }`}
            onMouseEnter={() => {
              console.log("mouse enter");
              setShow(true);
            }}
            onMouseLeave={() => setShow(false)}
            dangerouslySetInnerHTML={{ __html: summary }}></div>
        </div>
        <a className="font-semibold text-xl pt-3 pb-3" href={link}>
          {name}
        </a>
        <div className="flex w-full px-5 flex-wrap">
          {tags.map((tag, i) => {
            return <Chip key={i}>{tag}</Chip>;
          })}
        </div>
      </Card>
    </div>
  );
};

export default Project;
