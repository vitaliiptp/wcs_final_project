import React, { useState, useContext } from "react";
import FeedbackCard from "./global/feedbackCard";
import AppContext from "../context/AppContext";


const Feedbacks = () => {
  const { items, setItems } = useContext(AppContext);


  return (
    <div>
      {items.map((item, index) => {
        return (
          <FeedbackCard
            key={`feedback${index}`}
            title={item.title}
            description={item.description}
            category={item.category}
            upvotes={item.upvotes}
            comments={item.comments?.length}
          />
        );
      })}
    </div>
  );
};

export default Feedbacks;
