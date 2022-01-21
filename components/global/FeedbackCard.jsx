import React from "react";
import UpvoteBtn from "./UpvoteBtn";
import CategoryTag from "./categoryTag";
import CommentBtn from "./CommentBtn";

const FeedbackCard = ({title, description, category, upvotes, comments}) => {
  return (
    <div className="flex flex-row mb-[20px] px-[2rem] py-[1.75rem] w-[51.563rem] h-[9.438rem] rounded-[0.625rem] bg-white-normal">
      <div className="flex flex-[10%] items-start justify-start">
        <UpvoteBtn upvotes={upvotes}/>
      </div>
      <div className="flex flex-[80%] flex-col justify-between items-start">
          <p className="text-b-18">{title}</p>
          <p className="text-n-16">{description}</p>
          <CategoryTag category={category.charAt(0).toUpperCase() + category.slice(1)}/>
      </div>
      <div className="flex flex-[10%] justify-end">
        <CommentBtn comments={comments}/>
      </div>
    </div>
  );
};

export default FeedbackCard;
