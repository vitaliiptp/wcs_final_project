import React, { useContext } from "react";
import FeedbackCard from "./global/feedbackCard";
import AppContext from "../context/AppContext";
import EmptyFeedback from "./emptyFeedback";

const Feedbacks = () => {
  const { filteredItems, items } = useContext(AppContext);

  return (
    <div>
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => {
          return (
            <FeedbackCard
              key={`feedback${index}`}
              id={item.id}
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
