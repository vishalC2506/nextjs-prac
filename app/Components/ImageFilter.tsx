"use client";
import React, { useState } from "react";
import { SliderPicker } from "react-color";
const ImageFilter = () => {
  const [currentColor, setCurrentColor] = React.useState("#ff6");
  const handleOnChange = (color) => {
    setCurrentColor(color.hex);
    console.log(color);
  };
  return (
    <div className="row-span-[3/4] w-[clamp(15rem,25vw+2rem,30vw+1rem)] pl-2 ml-[clamp(0.8rem,2vw+0.5rem,4vw+0.8rem)]">
      <div className="flex w-full justify-between items-center">
        <h5 className="text-[#9B9C9E] font-semibold leading-5 font-plan">
          Hue
        </h5>
        <h5 className="text-[#9B9C9E] font-semibold leading-5 font-plan">
          {currentColor}
        </h5>
      </div>
      <SliderPicker color={currentColor} onChangeComplete={handleOnChange} />
    </div>
  );
};

export default ImageFilter;
