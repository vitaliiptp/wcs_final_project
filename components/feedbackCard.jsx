import React, { useContext } from "react";
import Link from "next/link";
import UpvoteBtn from "./upvoteBtn";
import CategoryTag from "./categoryTag";
import CommentBtn from "./commentBtn";
import AppContext from "../context/AppContext";

const FeedbackCard = ({
  id,
  title,
  description,
  category,
  upvotes,
  comments,
  width,
  mb,
  textStyle,
}) => {
  const { filteredItems, setSelectedFeedback } = useContext(AppContext);

  // User handling selection - bad
  // page handling selection - good
  // no need oncklick function
    /*const handleFeedbackSelection = () => {
        setSelectedFeedback(filteredItems.filter((item) => item.id === parseInt(id))[0]);
    }*/

  return (
    <div
      className={`flex flex-row ${mb} px-[2rem] py-[1.75rem] ${width} h-[9.438rem] rounded-[0.625rem] bg-white-normal`}
    >
      <div className="flex flex-[10%] items-start justify-start">
        <UpvoteBtn upvotes={upvotes} id={id} />
      </div>
      <div className="flex flex-[80%] flex-col justify-between items-start">
          <Link href={`/feedback/${id}`} >
              <p className={`text-b-18 ${textStyle}`}>{title}</p>
          </Link>
        <p className="text-n-16">{description}</p>
        <CategoryTag
          category={category?.charAt(0).toUpperCase() + category?.slice(1)}
        />
      </div>
      <div className="flex flex-[10%] justify-end">
        <CommentBtn comments={comments} />
      </div>
    </div>
  );
};

export default FeedbackCard;
