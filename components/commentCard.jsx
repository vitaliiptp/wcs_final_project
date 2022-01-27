import React, { useState } from "react";
import Replies from "./replies";
import AddComment from "./addComment";

const CommentCard = ({
  image,
  comment,
  commentType = "comment",
  pt = "pt-[2rem]",
}) => {
  const [newCommentForm, setNewCommentForm] = useState(false);

  return (
    <div className={`flex flex-row ${pt} pb-[1rem]`}>
      <div className="flex flex-col items-start justify-start mr-[1rem] ">
        <img
          src={`https://storage.googleapis.com/feedback_app/user-images/${image}.jpg?`}
          alt="user photo"
          className="w-[2.5rem] aspect-square rounded-full"
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col">
            <p className="text-b-14">{comment.user.name}</p>
            <p className="leading-none text-n-14 pb-[1rem]">
              {comment.user.username}
            </p>
          </div>
          <button
            className="text-sb-13"
            onClick={() => setNewCommentForm(!newCommentForm)}
          >
            Reply
          </button>
        </div>
        <div>
          <p className="text-n-15 pb-[1rem]">
            {commentType === "reply" && (
              <span className="text-b-15 pr-[0.5rem]">
                @{comment.replyingTo}
              </span>
            )}
            {comment.content}
          </p>
        </div>
        <div>
          {comment.replies && (
            <Replies
              replies={comment.replies}
              newCommentForm={newCommentForm}
              setNewCommentForm={setNewCommentForm}
            />
          )}
        </div>
        {newCommentForm && (
          <AddComment
            commentType="reply"
            setNewCommentForm={setNewCommentForm}
          />
        )}
      </div>
    </div>
  );
};

export default CommentCard;