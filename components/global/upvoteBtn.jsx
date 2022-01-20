import React from "react";
import arrowUp from "../../assets/shared/icon-arrow-up.svg";
import Image from "next/image";
import ArrowUp from "./svg/arrowUp";

const UpvoteBtn = () => {
  return (
    <button className="flex flex-col justify-between pt-[0.875rem] pb-[0.5rem] items-center w-[2.5rem] h-[3.3rem] rounded-[0.625rem] bg-white-dark hover:bg-white-dark-hover font-bold text-[0.8rem] text-blue-deep">
        <ArrowUp />
      99
    </button>
  );
};



export default UpvoteBtn;
