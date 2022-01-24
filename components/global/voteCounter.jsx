import React, { useEffect, useState } from "react";

const VoteCounter = ({ upvotes, voted }) => {
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    if (voted) {
      setVotes((upvotes += 1));
    } else setVotes(upvotes);
  }, [voted]);

  return votes || 0;
};

export default VoteCounter;
