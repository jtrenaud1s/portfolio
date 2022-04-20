import React from "react";
import { Check, Icon } from "react-bootstrap-icons";
import Badge from "../Badge";
import Card from "../Card";

interface ISkillSetProps {
  icon: Icon;
  title: string;
  skills: string[];
}

const Skillset: React.FC<ISkillSetProps> = ({ icon, title, skills }) => {
  const BadgeIcon: Icon = icon;
  return (
    <div className="mt-20">
      <Card className="relative bg-white p-4 mb-5">
        <Badge className="absolute -top-10 left-1/2 h-20 w-20 -ml-10">
          <BadgeIcon className="text-5xl text-white" />
        </Badge>
        <div className="w-full pt-10 pb-3 px-5">
          <div className="text-center pb-3 w-full text-xl font-semibold">
            {title}
          </div>
          <ul>
            {skills.map((skill, i) => {
              return (
                <li className="p-1 text-lg" key={i}>
                  <span className="flex flex-row items-center">
                    <Check className="text-azure-500 text-3xl" />
                    <span>{skill}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Skillset;
