import React from "react";

interface IBadgeProps {
  children: React.ReactNode;
  className?: string | undefined;
}

const Badge: React.FC<IBadgeProps> = ({ children, className }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-azure-500 ${
        className ? className : undefined
      }`}>
      {children}
    </div>
  );
};

export default Badge;
