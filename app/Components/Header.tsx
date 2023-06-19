"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { changeActive } from "../redux/navAction";
import { useAppDispatch } from "../redux/hook";
import Image from "next/image";
const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleMenu = () => {
    dispatch(changeActive());
  };
  
  return (
    <header
      className={` bg-[#0D0F10] grid grid-flow-row  
                       w-full rounded-2xl row-span-[1/2] `}
    >
      <div className="row-span-[1/2]  flex justify-between p-4">
        <div className="font-plan">
          <h5 className="font-bold text-white text-[clamp(1.2rem,1.2vw+0.8rem,1.4vw+0.8rem)]">
            Orbital Oddysey
          </h5>
          <h6 className="text-[#9B9C9E] text-[clamp(0.8rem,0.8vw+0.2rem,1vw+0.1rem)]">
            Marketing Campaign for a new TV series Launch
          </h6>
        </div>
        <div className=" flex items-center justify-between  align-top    p-1">
          <div className="  items-top justify-start hidden lg:flex mr-2">
            <Image
              src="/images/header1.png"
              width={5}
              height={10}
              alt="load err"
              className="w-[clamp(0.8rem,1.3vw+0.5rem,1.8vw+0.8rem)]"
            />
            <Image
              src="/images/header2.png"
              width={5}
              height={10}
              alt="load err"
              className="w-[clamp(0.8rem,1.3vw+0.5rem,1.8vw+0.8rem)]"
            />
            <Image
              src="/images/header3.png"
              width={5}
              height={10}
              alt="load err"
              className="w-[clamp(0.8rem,1.3vw+0.5rem,1.8vw+0.8rem)]"
            />
            <Image
              src="/images/header4.png"
              width={5}
              height={10}
              alt="load err"
              className="w-[clamp(0.8rem,1.3vw+0.5rem,1.8vw+0.8rem)]"
            />
            <Image
              src="/images/header5.png"
              width={5}
              height={10}
              alt="load err"
              className="w-[clamp(0.8rem,1.3vw+0.5rem,1.8vw+0.8rem)]"
            />
          </div>
          <button className="flex justify-start items-center  p-1">
            <Image
              src="/images/share.png"
              alt="load err"
              width={15}
              height={15}
            />
            <h6 className="font-semibold text-[#686B6E] ml-4 text-[clamp(0.5rem,0.8vw+0.5rem,1.1vw+0.8rem)] hidden sm:flex">
              Share
            </h6>
          </button>
          <button>
            <Image
              src="/images/ButtonIcon.png"
              width={15}
              height={15}
              className="w-[clamp(1vw+1rem,1.5vw+0.8rem,1.8vw+0.8rem)] ml-2"
              alt="load err"
            />
          </button>
          <button className="text-white sm:hidden ml-4 " onClick={handleMenu}>
            <AiOutlineMenu />
          </button>
        </div>
      </div>

      <div className="row-span-[2/3] p-2 flex items-end font-plane  justify-between lg:justify-between lg:w-1/2">
        <button className="flex items-center justify-evenly border-b-8 rounded-b-md  border-b-green-500 ">
          <Image
            src="/images/Arti.png"
            width={15}
            height={15}
            alt="load err"
            className="w-[clamp(0.8vw+0.5rem,0.5vw+1rem,1vw+1rem)] "
          />
          <h5 className="text-[#E8E9E9] text-[clamp(1rem,1vw+0.5rem,1.2vw+0.8rem)] font-semibold leading-5 p-2 ">
            Artificium
          </h5>
        </button>
        <button className="flex items-center justify-evenly ">
          <Image
            src="/images/chat.png"
            width={15}
            height={15}
            alt="load err"
            className="w-[clamp(0.8vw+0.5rem,0.5vw+1rem,1vw+1rem)]"
          />
          <h5 className="text-[#9B9C9E] text-[clamp(1rem,1vw+0.5rem,1.2vw+0.8rem)] font-semibold leading-5 p-2">
            Chat
          </h5>
        </button>
        <button className="flex items-center justify-evenly ">
          <Image
            src="/images/lib.png"
            width={15}
            height={15}
            alt="load err"
            className="w-[clamp(0.8vw+0.5rem,0.5vw+1rem,1vw+1rem)]"
          />
          <h5 className="text-[#9B9C9E] text-[clamp(1rem,1vw+0.5rem,1.2vw+0.8rem)] font-semibold leading-5 p-2">
            Library
          </h5>
        </button>
      </div>
    </header>
  );
};

export default Header;
