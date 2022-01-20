import React from "react";
import UpvoteBtn from "./global/upvoteBtn";
import CategoryBtn from "./global/categoryBtn";
import CommentBtn from "./global/commentBtn";

const FeedbackCard = () => {
  return (
    <div className="flex flex-row  px-[2rem] py-[1.75rem] w-[51.563rem] h-[9.438rem] rounded-[0.625rem] bg-white-normal">
      <div className="flex flex-[10%] items-start justify-start">
        <UpvoteBtn />
      </div>
      <div className="flex flex-[80%] flex-col justify-between items-start">
          <p className="font-bold text-[1.125rem] text-blue-deep">{"Title"}</p>
          <p className="font-normal text-[1rem] text-grey-light">{"Description"}</p>
          <CategoryBtn />
      </div>
      <div className="flex flex-[10%] justify-end">
        <CommentBtn />
      </div>
    </div>
  );
};

export default FeedbackCard;
