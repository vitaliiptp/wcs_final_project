import React from "react";
import ArrowUp from "./svg/ArrowDown";

const categories = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

const SortBtn = () => {
  return (
    <button className="flex flex-row items-center justify-center w-[12.125rem] h-[4.5rem] rounded-[0.625rem] bg-blue-dark text-n-14">
      Sort by:
      {" category"}
      <ArrowUp />
    </button>
  );
};

export default SortBtn;
