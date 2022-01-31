import React, { useContext, useState } from "react";
import Button from "./button";
import AppContext from "../context/AppContext";

const AddComment = ({ commentType = "comment", replyingTo, setNewCommentForm }) => {
  const [newCommentText, setNewCommentText] = useState("");
  const { selectedFeedback, setSelectedFeedback, selectedCommentId } =
    useContext(AppContext);

  const handleNewComment = () => {
    let tempFeedbackObj = { ...selectedFeedback };
    let newComment = {
      id: tempFeedbackObj.comments.length + 1,
      content: newCommentText,
      user: {
        image: "/user-images/image-zena.jpg",
        name: "Zena Kelley",
        username: "velvetround",
      },
    };
    let newReply = [
      {
        content: newCommentText,
        replyingTo: replyingTo,
        user: {
          image: "/user-images/image-zena.jpg",
          name: "Zena Kelley",
          username: "velvetround",
        },
      },
    ];
    if (commentType === "comment") {
      tempFeedbackObj.comments.push(newComment);
    }
    if (commentType === "reply") {
      tempFeedbackObj.comments.filter(
        (comment) => comment.id === selectedCommentId
      )[0].replies = newReply;
      setNewCommentForm(false);
    }

    setSelectedFeedback(tempFeedbackObj);
    setNewCommentText("");
    console.log(selectedFeedback);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-auto py-[1.5rem] px-[2rem] rounded-[0.625rem] bg-white-normal">
      <p className="text-b-18">Add Comment</p>
      <form className="mt-[1.5rem]" onSubmit={handleSubmit}>
        <textarea
          placeholder="Type your comment here"
          autoFocus={commentType === "reply"}
          value={newCommentText}
          className="bg-white-light text-n-15_b rounded-[0.3rem] w-full h-20 p-4 mb-[1rem]"
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <p className="text-n-15">
            {250 - newCommentText.length} Characters left
          </p>
          <Button
            type="button"
            buttonStyle="btn--purple"
            buttonSize="btn--large"
            onClick={handleNewComment}
          >
            <a className="text-b-14_w">Post Comment</a>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
