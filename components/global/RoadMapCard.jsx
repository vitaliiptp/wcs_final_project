import React from "react";
import UpvoteBtn from "../upvoteBtn"
import CategoryTag from "./categoryTag";
import CommentBtn from "../CommentBtn";
import StatusTag from "./statusTag";

const statusColor = [
    "d--planned",
    "d--live",
    "d--progress",
]

const FeedbackCard = ({status,statusColor,title, description, category, upvotes, comments}) => {
  return (
      <div className="">
    <div className={statusColor} ></div>
    <div className="flex flex-col mb-[1.25rem] px-[2rem] py-[1.75rem] rounded-b-[0.625rem] bg-white-normal">
        
      <div className="flex  items-start justify-start">
        <StatusTag stylePoint={"p--live"} status={status.charAt(0).toUpperCase() + status.slice(1)}/>
      </div>
      <div className="flex  flex-col justify-between items-start">
          <p className="text-b-18 pb-2">{title}</p>
          <p className="text-n-16 pb-2">{description}</p>
          <CategoryTag classname="pb-2" category={category.charAt(0).toUpperCase() + category.slice(1)}/>
      </div>
      <div className="flex justify-between items-center my-2">
        <UpvoteBtn upvotes={upvotes}/>
        <CommentBtn  comments={comments}/>
      </div>
    </div>
    </div>
  );
};

export default FeedbackCard;