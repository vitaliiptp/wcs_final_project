import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import CommentCard from "./commentCard";

const Comments = ({ feedbackId }) => {
  const { items } = useContext(AppContext);

  const commentsArray = items.filter(
    (item) => item.id === parseInt(feedbackId)
  )[0].comments;

  return (
    <div className="rounded-[0.625rem] bg-white-normal mb-[1.5rem] px-[2rem] pb-[3rem]">
      <p className="pt-[1.5rem] text-b-18">
        {commentsArray.length === 1
          ? commentsArray.length + " Comment"
          : commentsArray.length + " Comments"}
      </p>
      <div className="divide-y divide-purple-light_tr">
        {commentsArray &&
          commentsArray.map((comment, index) => (
            <CommentCard
              key={`comment${index}`}
              image=""
              comment={comment}
            />
          ))}
      </div>
    </div>
  );
};

export default Comments;
