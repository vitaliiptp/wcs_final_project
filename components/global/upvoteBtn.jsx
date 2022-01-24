import React, { useState } from "react";
import ArrowUp from "./svg/ArrowUp";
import VoteCounter from "./voteCounter";

const UpvoteBtn = ({ upvotes }) => {
  const [voted, setVoted] = useState(false);

  const handleUpvote = () => {
    setVoted(!voted);
  };

  return (
    <button
      className={voted ? "upvote-btn_active" : "upvote-btn"}
      onClick={handleUpvote}
    >
      <ArrowUp stroke={voted ? "#FFFFFF" : "#4661E6"} />
      <VoteCounter upvotes={upvotes} voted={voted} />
    </button>
  );
};

export default UpvoteBtn;
