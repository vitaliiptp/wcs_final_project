import React, {useState} from "react";
import Button from "./button";
import Link from "next/link";

const AddComment = ({commentType = "comment"}) => {
    const [newCommentText, setNewCommentText] = useState("");

    console.log(newCommentText)

  return (
    <div className="w-full h-auto py-[1.5rem] px-[2rem] rounded-[0.625rem] bg-white-normal">
      <p className="text-b-18">Add Comment</p>
      <form
        className="mt-[1.5rem]"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          placeholder="Type your comment here"
          autoFocus={commentType === "reply"}
          className="bg-white-light text-n-15_b rounded-[0.3rem] w-full h-20 p-4 mb-[1rem]"
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <p className="text-n-15">{250 - newCommentText.length} Characters left</p>
          <Button
            type="button"
            buttonStyle="btn--purple"
            buttonSize="btn--large"
          >
            <Link href="">
              <a className="text-b-14_w">Post Comment</a>
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
