import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import CommentCard from "./commentCard";

const Comments = () => {
  const { selectedFeedback } = useContext(AppContext);

  return (
    <div className="rounded-[0.625rem] bg-white-normal mb-[1.5rem] px-[2rem] pb-[2rem]">
      <p className="pt-[1.5rem] text-b-18">
        {selectedFeedback.comments.length === 1
          ? selectedFeedback.comments.length + " Comment"
          : selectedFeedback.comments.length + " Comments"}
      </p>
      <div className="divide-y divide-purple-light_tr">
        {selectedFeedback.comments &&
          selectedFeedback.comments.map((comment, index) => (
            <CommentCard
              key={`comment${index}`}
              image={comment.user.image}
              comment={comment}
            />
          ))}
      </div>
    </div>
  );
};

export default Comments;
