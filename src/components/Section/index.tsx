import React from "react";

interface ISectionProps {
  children: React.ReactNode;
  title?: string | undefined;
  className?: string | undefined;
}

const Section: React.FC<ISectionProps> = ({ children, title, className }) => {
  return (
    <div className={className ? className : undefined}>
      {title && (
        <h2 className="text-2xl font-semibold text-center mt-10 mb-10">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default Section;
