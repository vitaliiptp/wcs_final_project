import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import GoBackBtn from "../../components/goBackBtn";
import Button from "../../components/button";
import Link from "next/link";
import FeedbackCard from "../../components/feedbackCard";
import AppContext from "../../context/AppContext";
import AddComment from "../../components/addComment";
import Comments from "../../components/comments";

const FeedbackDetail = () => {
  const { selectedFeedback, setSelectedFeedback, filteredItems } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    const feedbackId = router.query.id;

    if (!feedbackId) {
      return
    }

    const filteredItemIndex = filteredItems.findIndex(item => item.id == feedbackId)

    setSelectedFeedback(filteredItems[filteredItemIndex]);
  }, [router.query.id])

  return (
    <div className="flex justify-center">
      {selectedFeedback && <div className="w-[45.625rem]">
        <div className="flex flex-row justify-between mt-[5rem] mb-[1.5rem]">
          <GoBackBtn route="/" />
          <Button type="button" buttonStyle="btn--blue" buttonSize="btn--large">
            <Link href={`/feedback/${selectedFeedback.id}/edit-feedback`} >
              <a className="text-b-14_w">Edit Feedback</a>
            </Link>
          </Button>
        </div>
        <div className="flex flex-col">
          <FeedbackCard
            id={selectedFeedback.id}
            title={selectedFeedback.title}
            description={selectedFeedback.description}
            category={selectedFeedback?.category}
            upvotes={selectedFeedback.upvotes}
            comments={selectedFeedback.comments?.length}
            width="w-[45.625rem]"
            mb="mb-[1.5rem]"
            textStyle=""
          />
        </div>
        <Comments feedbackId={selectedFeedback.id} />
        <AddComment />
      </div>}
    </div>
  );
};

export default FeedbackDetail;
