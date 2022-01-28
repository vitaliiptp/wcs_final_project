import React from 'react';
import ArrowUp from "./svg/ArrowUp";

const UpvoteRoadMap = ({upvotes}) => {
    return (
      <button className="flex flex-row  justify-evenly items-center h-[2.5rem] w-[4.313rem] rounded-[0.625rem] bg-white-dark hover:bg-white-dark-hover text-b-13">
          <ArrowUp />
          {upvotes || 0}
      </button>
    );
  };


export default UpvoteRoadMap;
