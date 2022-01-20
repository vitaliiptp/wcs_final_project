import React from "react";
import arrowUp from "../../assets/shared/icon-arrow-up.svg";
import Image from "next/image";
import ArrowUp from "./svg/ArrowUp";

const UpvoteBtn = ({upvotes}) => {
  return (
    <button className="flex flex-col justify-between pt-[0.875rem] pb-[0.5rem] items-center w-[2.5rem] h-[3.3rem] rounded-[0.625rem] bg-white-dark hover:bg-white-dark-hover text-b-13">
        <ArrowUp />
        {upvotes || 0}
    </button>
  );
};



export default UpvoteBtn;
