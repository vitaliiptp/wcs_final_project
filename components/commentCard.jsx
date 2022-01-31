import React, {useContext, useState} from "react";
import Replies from "./replies";
import AddComment from "./addComment";
import AppContext from "../context/AppContext";

const CommentCard = ({
  image,
  comment,
  commentType = "comment",
  pt = "pt-[2rem]",
}) => {
  const [newCommentForm, setNewCommentForm] = useState(false);
  const { selectedCommentId, setSelectedComment } = useContext(AppContext);


  const handleNewReply = (commentId) => {
    setSelectedComment(commentId);
    setNewCommentForm(!newCommentForm);
  }

  return (
    <div className={`flex flex-row ${pt} mb-[1rem]`}>
      <div className="flex flex-col items-start justify-start mr-[1rem] ">
        <img
          src={image}
          alt="users picture"
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
          {commentType === "comment" && (
            <button
              className="text-sb-13"
              onClick={(e) => handleNewReply(comment.id)}
            >
              Reply
            </button>
          )}
        </div>
        <div>
          <p className="text-n-15 pb-[2rem]">
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
            replyingTo = {comment.user.username}
            selectedCommentId={selectedCommentId}
            setNewCommentForm={setNewCommentForm}
          />
        )}
      </div>
    </div>
  );
};

export default CommentCard;
