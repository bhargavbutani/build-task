import React from "react";

const LineAnimation = () => {
  return (
    <div className="mt-40">
      <div className="slider ">
        <div className="slide-track mt-2.5">
          {Array.from({ length: 15 }, (_, index) => (
            <div key={index} className="slide text-white text-xl font-medium">
              Lorem Ipsum
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineAnimation;
