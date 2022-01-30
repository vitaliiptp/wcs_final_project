import React, { useContext } from "react";
import { useRouter } from "next/router";
import GoBackBtn from "../../components/goBackBtn";
import Button from "../../components/button";
import Link from "next/link";
import FeedbackCard from "../../components/feedbackCard";
import AppContext from "../../context/AppContext";
import AddComment from "../../components/addComment";
import CommentCard from "../../components/commentCard";
import Comments from "../../components/comments";

const FeedbackDetail = () => {
  const { filteredItems, selectedFeedback } = useContext(AppContext);

  const router = useRouter();
  const feedback = filteredItems.filter((item) => item.id === parseInt(router.query.id))[0]

  return (
    <div className="flex justify-center">
      <div className="w-[45.625rem]">
        <div className="flex flex-row justify-between mt-[5rem] mb-[1.5rem]">
          <GoBackBtn route="/" />
          <Button type="button" buttonStyle="btn--blue" buttonSize="btn--large">
            <Link href="">
              <a className="text-b-14_w">Edit Feedback</a>
            </Link>
          </Button>
        </div>
        <div className="flex flex-col">
          <FeedbackCard
            id={feedback.id}
            title={feedback.title}
            description={feedback.description}
            category={feedback.category}
            upvotes={feedback.upvotes}
            comments={feedback.comments.length}
            width="w-[45.625rem]"
            mb="mb-[1.5rem]"
            textStyle=""
          />
        </div>
        <Comments feedbackId={feedback.id} />
        <AddComment />
      </div>
    </div>
  );
};

export default FeedbackDetail;
