import React, { useContext, useEffect, useState } from "react";
import FeedbackCard from "./feedbackCard";
import AppContext from "../context/AppContext";
import EmptyFeedback from "./emptyFeedback";
import Loader from "./loader";

const Feedbacks = (props,other) => {
  const { filteredItems, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : filteredItems.length > 0 ? (
        filteredItems.map((item) => {
          return (
            <FeedbackCard
              key={item._id}
              id={item._id}
              title={item.title}
              description={item.description}
              category={item.category}
              upvotes={item.upvotes}
              comments={item.comments?.length}
              width="w-[51.563rem]"
              mb="mb-[1.25rem]"
              textStyle="hover:cursor-pointer hover:underline"
            />
          );
        })
      ) : (
        <EmptyFeedback />
      )}
    </div>
  );
};

export default Feedbacks;

