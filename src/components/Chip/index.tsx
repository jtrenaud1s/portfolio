import React from "react";

interface IChipProps {
  children: React.ReactNode;
}

const Chip: React.FC<IChipProps> = ({ children }) => {
  return (
    <div className="text-white bg-gray-800 rounded-3xl px-3 m-2 font-semibold">
      {children}
    </div>
  );
};

export default Chip;
