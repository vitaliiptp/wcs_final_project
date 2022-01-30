import React, { useContext, useState } from "react";
import Button from "./button";
import AppContext from "../context/AppContext";

const AddComment = ({ commentType = "comment" }) => {
  const [newCommentText, setNewCommentText] = useState('');
  const { selectedFeedback, setSelectedFeedback } = useContext(AppContext);

    const handleNewComment = () => {
        let tempFeedbackObj = selectedFeedback;
        let newComment = {
            id: tempFeedbackObj.comments.length + 1,
            content: newCommentText,
            user: {
                image: "/user-images/image-suzanne.jpg",
                name: "Suzanne Chang",
                username: "upbeat1811",
            }};
        tempFeedbackObj.comments.push(newComment);
        setSelectedFeedback(tempFeedbackObj);
        setNewCommentText('');
        console.log("!!!!!!!!!!!!", selectedFeedback)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <div className="w-full h-auto py-[1.5rem] px-[2rem] rounded-[0.625rem] bg-white-normal">
      <p className="text-b-18">Add Comment</p>
      <form
        className="mt-[1.5rem]"
        onSubmit={handleSubmit}
      >
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
