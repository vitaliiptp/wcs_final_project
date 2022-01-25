import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import CommentCard from "./global/commentCard";

const Comments = ({ feedbackId }) => {
  const { items } = useContext(AppContext);

  const commentsArray = items.filter((item) => item.id === parseInt(feedbackId))[0].comments

  console.log(commentsArray);

  return (
    <div className="rounded-[0.625rem] bg-white-normal mb-[1.5rem] px-[2rem] divide-y divide-purple-light">
      {commentsArray && commentsArray.map((comment, index) => (
        <CommentCard
          key={`comment${index}`}
          image=""
          name={comment.user.name}
          username={comment.user.username}
          content={comment.content}
          replies={comment.replies}
        />
      ))}
    </div>
  );
};

export default Comments;
