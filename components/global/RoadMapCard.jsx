import React, {useContext} from "react";

import UpvoteBtn from "../upvoteBtn"
import CategoryTag from "./categoryTag";
import CommentBtn from "../CommentBtn";
import Link from "next/link";
import AppContext from "../../context/AppContext";




const statusColor = [
    "d--planned",
    "d--live",
    "d--progress",
]
const stylePoint = [
  "p--planned",
  "p--live",
  "p--progress",
]
const RoadMapCard = ({id,status,statusColor,stylePoint,title, description, category, upvotes, comments}) => {
  const { filteredItems, setSelectedFeedback } = useContext(AppContext);

    const handleFeedbackSelection = () => {
        setSelectedFeedback(filteredItems.filter((item) => item.id === parseInt(id))[0]);
    }

  
  
  return (
      <div className="">
    <div className={statusColor} ></div>
    <div className="flex flex-col mb-[1.25rem] px-[2rem] py-[1.75rem] rounded-b-[0.625rem] bg-white-normal">
      <div className='flex  mb-4'>
        <div className={stylePoint}></div>
        <div className='text-n-16'>{status}</div>
      </div>
      <div className="flex  flex-col justify-between items-start">
          <Link  href={`/feedback/${id}`} >
              <a className="text-b-18 pb-2 hover:text-blue-normal" onClick={handleFeedbackSelection}>{title}</a>
          </Link>
          <p className="text-n-16 pb-2">{description}</p>
          <CategoryTag classname="pb-2" category={category.charAt(0).toUpperCase() + category.slice(1)}/>
      </div>
      <div className="flex justify-between items-center my-2">
        <UpvoteBtn upvotes={upvotes} id={id}/>
        <CommentBtn comments={comments}/>
        
      </div>
    </div>
    </div>
  );
};

export default RoadMapCard;