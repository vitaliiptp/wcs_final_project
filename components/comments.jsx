import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import CommentCard from "./commentCard";
import Loader from "./loader";

const Comments = ({ feedbackId }) => {
  const { filteredItems, loading } = useContext(AppContext);

  const commentsArray = filteredItems.filter(
    (item) => item._id === feedbackId
  )[0].comments;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="rounded-[0.625rem] bg-white-normal mb-[1.5rem] px-[2rem] pb-[2rem]">
          <p className="pt-[1.5rem] text-b-18">
            {commentsArray.length === 1
              ? commentsArray.length + " Comment"
              : commentsArray.length + " Comments"}
          </p>
          <div className="divide-y divide-purple-light_tr">
            {commentsArray &&
              commentsArray.map((comment) => (
                <CommentCard
                  key={comment._id}
                  image={comment.user.image}
                  comment={comment}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
