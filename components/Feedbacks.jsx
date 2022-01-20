import React from "react";
import FeedbackCard from "./global/FeedbackCard";
import data from "../data.json";

const Feedbacks = () => {

  return (
    <div>
      {data.productRequests.map((item, index) => (
          // console.log(item.comments.length)
        <FeedbackCard
          key={`feedback${index}`}
          title={item.title}
          description={item.description}
          category={item.category}
          upvotes={item.upvotes}
          // comments={item.comments.length}
        />
      ))}
    </div>
  );
};

export default Feedbacks;
