import React, {useContext, useState} from "react";
import ArrowUp from "./svg/ArrowUp";
import AppContext from "../../context/AppContext";

const UpvoteBtn = ({ id }) => {
  const { filteredItems } = useContext(AppContext);
  const [voted, setVoted] = useState(false);
  const [upvote, setUpvote] = useState(parseInt(filteredItems.filter(item => item.id === id)[0].upvotes));


  const handleUpvote = () => {
    setVoted(!voted);
    if(!voted) setUpvote(upvote + 1);
    else setUpvote(upvote - 1);
  };

  return (
    <button
      className={voted ? "upvote-btn_active" : "upvote-btn"}
      onClick={handleUpvote}
    >
      <ArrowUp stroke={voted ? "#FFFFFF" : "#4661E6"} />
      {upvote}
    </button>
  );
};

export default UpvoteBtn;
