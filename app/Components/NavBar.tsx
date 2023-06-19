"use client";
import React from "react";
import { changeActive } from "../redux/navAction";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../redux/hook";
const NavBar: React.FC = () => {
  const isActive = useAppSelector((state) => state.navActionReducer.value);
  const dispatch = useAppDispatch();
  const handleMenu = () => {
    dispatch(changeActive());
  };
  return (
    <>
      <nav
        className={`  bg-Noble  ${
          !isActive ? "grid" : "hidden"
        }  col-span-[1/2] row-span-1 
       sm:grid grid-rows-[minmax(min-content,1fr)_minmax(min-content,1.5fr)_minmax(min-content,3.8fr)_minmax(min-content,0.7fr)]
       h-screen z-50 sm:h-auto 
     `}
      >
        <div className=" row-span-[1/2] p-4 flex justify-between ">
          <div className="flex  items-center  ">
            <Image
              src="/images/Avatar.png"
              width={25}
              height={25}
              alt="load err"
              className="w-[clamp(2rem,2.8vw+0.5rem,4vw+1rem)]"
            />
            <div className="pl-2 font-plan   ">
              <h5 className="font-semibold text-[clamp(0.8rem,0.5vw+0.6rem,0.8vw+0.8rem)] text-white md:tracking-wider">
                Intellisys
              </h5>
              <h6 className="tracking-wide text-[#B6F09C] text-[clamp(0.6rem,0.6vw+0.2rem,0.6vw+0.6rem)]">
                12 members
              </h6>
            </div>
          </div>
          <div className="flex items-center">
            <select className="bg-Noble text-white hover:cursor-pointer  w-[clamp(0.8rem,1vw+0.2rem+1.2vw+0.5rem)] mb-1  "></select>
            <button className="text-white ml-4 sm:hidden" onClick={handleMenu}>
              <IoCloseOutline />
            </button>
          </div>
        </div>
        <div className=" row-span-[2/3] p-4  flex flex-col  justify-evenly">
          {" "}
          <h5
            className={`text-[#686B6E] font-plan uppercase leading-4 text-[clamp(1rem,0.6vw+0.8rem,1.4vw+1rem)] font-semibold`}
          >
            General
          </h5>
          <div className="flex justify-evenly flex-col content-evenly h-full">
            <div className="flex justify-between h-1/2 ">
              <button className="flex text-center align-middle items-center ">
                <Image
                  src="/images/search.png"
                  alt="load err"
                  width={13.33}
                  height={13.33}
                  className="w-[clamp(1rem,0.5vw+0.8rem,1.2vw+1rem)] pb-[0.4em] "
                />
                <h5
                  className={`text-center  font-plan  md:font-semibold text-[#E8E9E9]
                leading-5 text-[clamp(1.2rem,1vw+0.5rem,1.2vw+0.1rem)]  ml-2 tracking-wider`}
                >
                  Search
                </h5>
              </button>
              <button>
                <Image
                  src="/images/swastic.png"
                  alt="load err"
                  width={22}
                  height={18}
                  className="w-[clamp(1rem,1vw+0.8rem,1.8vw)]  "
                />
              </button>
            </div>
            <div>
              <button className="flex align-middle items-center ">
                <Image
                  src="/images/wallet.png"
                  alt="load err"
                  width={15}
                  height={11.67}
                  className="w-[clamp(1rem,1.2vw+0.45rem,1.5vw+0.8rem)] "
                />
                <h5 className="text-[#E8E9E9] text-[clamp(1.2rem,1vw+0.5rem,1.2vw+0.1rem)]  leading-5 pl-2 font-semibold">
                  Billing
                </h5>
              </button>
            </div>
          </div>
        </div>
        <div className=" row-span-[3/4] flex flex-col justify-evenly p-4 ">
          <h5 className="text-[#686B6E]  uppercase leading-4 text-[clamp(1rem,0.6vw+0.8rem,1.4vw+1rem)] font-semibold font-plan">
            Projects
          </h5>
          <button className="flex w-full hover:bg-backgroun-gradient rounded-md items-center p-1 font-plan ">
            <Image
              src="/images/orbital.png"
              alt="load err"
              width={15}
              height={15}
              className="w-[clamp(1rem,1.2vw+0.45rem,1.5vw+0.8rem)] "
            />
            <h5 className="text-[#E8E9E9] text-[clamp(1rem,1vw+0.5rem,1.2vw+0.1rem)] text-left leading-5 pl-2 font-semibold">
              Orbital Oddysey
            </h5>
          </button>
          <button className="flex w-full hover:bg-backgroun-gradient rounded-md items-center p-1 font-plan">
            <Image
              src="/images/digital.png"
              width={15}
              height={15}
              className="w-[clamp(1rem,1.2vw+0.45rem,1.5vw+0.8rem)]"
              alt="load err"
            />
            <h5 className="text-[#E8E9E9] text-[clamp(1rem,1vw+0.5rem,1.2vw+0.1rem)] text-left leading-5 pl-2 font-semibold">
              Digital Product Launch
            </h5>
          </button>
          <button className="flex w-full hover:bg-backgroun-gradient items-center p-1 rounded-md font-plan">
            <Image
              src="/images/brand.png"
              width={15}
              height={15}
              className="w-[clamp(1rem,1.2vw+0.45rem,1.5vw+0.8rem)]"
              alt="load err"
            />
            <h5 className="text-[#E8E9E9] text-[clamp(1rem,1vw+0.5rem,1.2vw+0.1rem)] text-left  leading-5 pl-2 font-semibold">
              Brand Refresh
            </h5>
          </button>
          <button className="flex w-full hover:bg-backgroun-gradient items-center p-1 rounded-md font-plan">
            <Image
              src="/images/socialMedia.png"
              alt="load err"
              width={15}
              height={15}
              className="w-[clamp(1rem,1.2vw+0.45rem,1.5vw+0.8rem)]"
            />
            <h5 className="text-[#E8E9E9] text-[clamp(1rem,1vw+0.5rem,1.2vw+0.1rem)]  text-left leading-5 pl-2 font-semibold ">
              Social Media Strategy
            </h5>
          </button>
          <button className="flex w-full  items-center text-left p-1 rounded-md hover:bg-backgroun-gradient font-plan">
            <Image
              src="/images/Add.png"
              alt="load err"
              width={15}
              height={15}
              className="w-[clamp(1rem,1.2vw+0.45rem,1.5vw+0.8rem)]"
            />
            <h5 className="text-[#E8E9E9] text-[clamp(1rem,1vw+0.5rem,1.2vw+0.1rem)]  text-left leading-5 pl-2 font-semibold ">
              Add new project
            </h5>
          </button>
        </div>
        <div className=" row-span-[4/5] flex justify-between m-4 bg-backgroun-gradient p-2 rounded-md">
          <div className="flex items-center align-center">
            <Image
              src="/images/profile.png"
              alt="load err"
              width={15}
              height={15}
              className="w-[clamp(2rem,2.8vw+0.5rem,4vw+1rem)]"
            />

            <div className="pl-2 font-plan   ">
              <h5 className="font-semibold text-[clamp(0.8rem,0.5vw+0.6rem,0.8vw+0.8rem)] text-white md:tracking-wider">
                John Wick
              </h5>
              <h6 className="tracking-wide text-[#B6F09C] text-[clamp(0.6rem,0.6vw+0.2rem,0.6vw+0.6rem)]">
                Premium
              </h6>
            </div>
          </div>
          <button className="">
            <Image
              src="/images/setting.png"
              width={15}
              height={15}
              alt="load err"
              className="bg-Noble text-white hover:cursor-pointer  w-[clamp(0.8rem,1vw+0.2rem+1.2vw+0.5rem)] mb-1 "
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
