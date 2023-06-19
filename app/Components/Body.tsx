import React from "react";
import Image from "next/image";

import ImageFilter from "./ImageFilter";
const Body: React.FC = () => {
  return (
    <div
      className={`  bg-[#0D0F10] row-span-[2/3] rounded-2xl  grid 
                 grid-row grid-rows-[minmax(min-content,1fr)_minmax(min-content,5fr)]
                     `}
    >
      <div className="row-span-[1/2] flex justify justify-between items-center  min-h-[10vh]">
        <div className="flex items-center justify-between  p-2 sm:p-2 mr-2 h-full ">
          <div className="flex items-center p-2 md:p-2 justify-between  ">
            <Image
              src="/images/backButton.png"
              alt="load err"
              width={15}
              height={15}
              className="w-[clamp(0.3rem,0.5vw+0.2rem,0.8vw+0.2rem)] mr-2 md:mr-4 "
            />
            <h6
              className={`text-white font-semibold text-[clamp(0.6rem,0.6vw+0.5rem,1vw+0.5rem)]
             leading-5 font-plane md:tracking-wider `}
            >
              Modern spaceship in cosmos
            </h6>
            <button>
              <Image
                src="/images/button3d.png"
                width={10}
                height={10}
                alt="load err"
                className="w-[clamp(0.5rem,0.8vw+1.2rem,1vw+1.2rem)] ml-2 md:ml-6"
              />
            </button>
          </div>
        </div>
        <div className="flex  items-center p-2 justify-between min-w-[clamp(4rem,18vw+2rem,22vw+3rem)]   ">
          <button className="flex">
            <Image
              src="/images/starbutton.png"
              width={15}
              height={15}
              className="w-[clamp(0.5rem,0.8rem+0.5vw,0.8rem+0.8vw)]"
              alt="load err"
            />
          </button>
          <button className="flex items-center">
            <h5 className="text-[#686B6E] font-plan font-semibold hidden sm:flex pr-4 text-[clamp(0.5rem,0.8vw+0.8rem,1.1vw+0.8rem)]">
              Export
            </h5>
            <Image
              alt="load err"
              width={15}
              height={15}
              src="/images/downloadbutton.png"
              className="w-[clamp(0.5rem,0.8rem+0.5vw,0.8rem+0.8vw)] "
            />
          </button>
          <button className="flex items-center">
            <Image
              width={15}
              height={15}
              src="/images/more.png"
              className="w-[clamp(0.5rem,0.4rem+0.3vw,0.6rem+0.5vw)] "
              alt="load err"
            />
          </button>
        </div>
      </div>
      <div className=" row-span[2/3]  grid  grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] ">
        <div className=" bg-mainImg  object-contain bg-center min-h-[15rem] "></div>

        <div
          className={`  grid grid-flow-row 
grid-rows-[minmax(min-content,1fr)_minmax(min-content,1fr)_minmax(min-content,2fr)_minmax(min-content,1fr)_minmax(min-content,2fr)_minmax(min-content,1fr)_minmax(min-content,1fr)] 
items-center `}
        >
          <div className="row-span-[1/2] pl-2 flex ">
            <Image
              src="/images/verticalCrop.png"
              width={10}
              height={10}
              className="w-[clamp(0.5rem,0.6vw+0.5rem,1.2vw+0.3vw)] ml-[clamp(0.8rem,2vw+0.5rem,4vw+0.8rem)]"
              alt="load err"
            />
            <Image
              src="/images/horizontalCrop.png"
              width={15}
              height={15}
              className="w-[clamp(0.5rem,0.6vw+0.5rem,1.2vw+0.3vw)] ml-[clamp(0.8rem,2vw+0.5rem,4vw+0.8rem)]"
              alt="load err"
            />
            <Image
              src="/images/fullCrop.png"
              width={15}
              height={15}
              className="w-[clamp(0.5rem,0.6vw+0.5rem,1.2vw+0.3vw)] ml-[clamp(0.8rem,2vw+0.5rem,4vw+0.8rem)]"
              alt="load err"
            />
            <Image
              src="/images/brightness.png"
              width={15}
              height={15}
              className="w-[clamp(0.5rem,0.6vw+0.5rem,1.2vw+0.3vw)] ml-[clamp(0.8rem,2vw+0.5rem,4vw+0.8rem)]"
              alt="load err"
            />
            <Image
              src="/images/torch.png"
              width={15}
              height={15}
              className="w-[clamp(0.5rem,0.6vw+0.5rem,1.2vw+0.3vw)] ml-[clamp(0.8rem,2vw+0.5rem,4vw+0.8rem)]"
              alt="load err"
            />
          </div>
          <div className="row-span-[2/3]  font-plan flex pl-2 items-center">
            <button>
              <Image
                src="/images/downwardbutton.png"
                width={10}
                height={10}
                alt="load err"
                className="w-[clamp(0.5rem,0.6vw+0.5rem,1.2vw+0.3vw)] ml-[clamp(0.8rem,2vw+0.5rem,4vw+0.8rem)] "
              />
            </button>
            <h5 className="font-semibold text-white font w-[clamp(1.5rem,0.8vw+0.5rem,1vw+0.8rem)] ml-2 tracking-wider">
              Colors
            </h5>
          </div>
          <ImageFilter />
          <div className="row-span-[4/5]  flex items-center pl-2">
            <Image
              src="/images/downwardbutton.png"
              width={10}
              height={10}
              alt="load err"
              className="w-[clamp(0.5rem,0.6vw+0.5rem,1.2vw+0.3vw)] ml-[clamp(0.8rem,2vw+0.5rem,4vw+0.8rem)] "
            />
            <h5 className="font-semibold text-white font w-[clamp(1.5rem,0.8vw+0.5rem,1vw+0.8rem)] ml-2 tracking-wider">
              Effects
            </h5>
          </div>
          <div
            className={`row-span-[5/6] 
          `}
          >
            <div
              className={`items-center    flex justify-between  lg:pl-12
           w-full`}
            >
              <h5
                className={`text-[#CDCECF] font-semibold leading-5 font-plan
                              text-[clamp(1rem,0.7vw+0.4rem,1vw+0.5rem)] tracking-wider`}
              >
                Flare bokhen
              </h5>
              <div className="flex justify-evenly col-span-[2/-1]  items-center ">
                <h6 className="text-[#686B6E] font-semibold ml-[clamp(0.2rem,0.5vw+0.2rem,0.7vw+0.3rem)] text-[clamp(1rem,0.5vw+0.2rem,0.5vw+0.5rem)]">
                  0.25, 0.75, H255
                </h6>
                <Image
                  src="/images/ImageFilter.png"
                  width={10}
                  height={10}
                  className="w-[clamp(0.5rem,0.6vw+0.5rem,1.2vw+0.3vw)] ml-[clamp(0.2rem,0.5vw+0.2rem,0.7vw+0.3rem)]"
                  alt="load err"
                />
                <Image
                  src="/images/ImageView.png"
                  width={10}
                  height={10}
                  className="w-[clamp(1rem,0.6vw+0.5rem,1.2vw+0.3vw)] ml-[clamp(1rem,0.5vw+0.2rem,0.7vw+0.3rem)]"
                  alt="load err"
                />
              </div>
            </div>
            <div
              className={`items-center    flex justify-between lg:pl-12
           w-full`}
            >
              <h5 className="text-[#CDCECF] font-semibold leading-5 font-plan   text-[clamp(1rem,0.5vw+0.2rem,0.5vw+0.5rem)] ">
                Gaussian blur
              </h5>
              <div className="flex justify-evenly col-span-[2/-1]  items-center ">
                <h6 className="text-[#686B6E] font-semibold ml-[clamp(0.2rem,0.5vw+0.2rem,0.7vw+0.3rem)] text-[clamp(1rem,0.5vw+0.2rem,0.5vw+0.5rem)]">
                  0.33
                </h6>
                <Image
                  src="/images/ImageFilter.png"
                  width={10}
                  height={10}
                  className="w-[clamp(0.5rem,0.6vw+0.5rem,1.2vw+0.3vw)] ml-[clamp(0.2rem,0.5vw+0.2rem,0.7vw+0.3rem)]"
                  alt="load err"
                />
                <Image
                  src="/images/hideImage.png"
                  width={10}
                  height={10}
                  className="w-[clamp(1rem,0.6vw+0.5rem,1.2vw+0.3vw)] ml-[clamp(1rem,0.5vw+0.2rem,0.7vw+0.3rem)]"
                  alt="load err"
                />
              </div>
            </div>
          </div>
          <div className="row-span-[5/6] justify-center flex items-center">
            <Image
              src="/images/Add.png"
              width={10}
              height={10}
              alt="load err"
              className="w-[clamp(1.2rem,0.8vw+0.5rem,1.4vw+0.3vw)]"
            />
            <h5 className="font-semibold font-plan text-[#686B6E] ml-2 text-[clamp(1.2rem,0.4rem+0.6vw,0.8vw+0.6rem)]">
              Add effect
            </h5>
          </div>
          <div className="row-span-[6/-1]   grid justify-center items-end">
            <h5
              className="text-slate-400 font-bold font-plan text-transparent 
                        bg-clip-text bg-gradient-to-b from-slate-200
                        to-gray-800 opacity-40 "
            >
              Hue Saturation
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
