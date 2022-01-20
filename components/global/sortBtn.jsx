import React from "react";
import ArrowUp from "./svg/arrowDown";

const categories = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

const SortBtn = () => {
  return (
    <button className="flex flex-row items-center justify-center w-[12.125rem] h-[4.5rem] rounded-[0.625rem] bg-blue-dark font-normal text-[0.875rem] text-white-dark">
      Sort by:
      {" category"}
      <ArrowUp />
    </button>
  );
};

export default SortBtn;
