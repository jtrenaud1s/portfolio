import React from "react";

interface ICardProps {
  children: React.ReactNode;
  className?: string | undefined;
}

const Card: React.FC<ICardProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full shadow rounded-sm ${
        className ? className : undefined
      }`}>
      {children}
    </div>
  );
};

export default Card;
