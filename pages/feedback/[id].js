import React, { useContext } from "react";
import { useRouter } from "next/router";
import GoBackBtn from "../../components/global/goBackBtn";
import Button from "../../components/global/button";
import Link from "next/link";
import FeedbackCard from "../../components/global/feedbackCard";
import AppContext from "../../context/AppContext";
import AddComment from "../../components/global/addComment";
import CommentCard from "../../components/global/commentCard";
import Comments from "../../components/comments";

const FeedbackDetail = () => {
  const { items } = useContext(AppContext);

  const router = useRouter();

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
          {items
            .filter((item, index) => item.id === parseInt(router.query.id))
            .map((item, index) => (
              <FeedbackCard
                key={`feedback${index}`}
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                upvotes={item.upvotes}
                comments={item.comments?.length}
                width="w-[45.625rem]"
                textStyle=""
              />
            ))}
        </div>
        <Comments feedbackId="1"/>
        <AddComment />
      </div>
    </div>
  );
};

export default FeedbackDetail;
