import React, {useContext, useState} from "react";
import ArrowUp from "./svg/ArrowUp";
import AppContext from "../../context/AppContext";

const UpvoteBtn = ({ upvotes, id }) => {
  const { filteredItems } = useContext(AppContext);
  const [voted, setVoted] = useState(false);
  const [upvote, setUpvote] = useState(0);


  const handleUpvote = () => {
    setVoted(!voted);
    if(!voted) setUpvote(parseInt(filteredItems.filter(item => item.id === id)[0].upvotes) + 1);
    else setUpvote(parseInt(filteredItems.filter(item => item.id === id)[0].upvotes) - 1);
  };

  return (
    <button
      className={voted ? "upvote-btn_active" : "upvote-btn"}
      onClick={handleUpvote}
    >
      <ArrowUp stroke={voted ? "#FFFFFF" : "#4661E6"} />
      {voted ? upvote : upvotes}
    </button>
  );
};

export default UpvoteBtn;
