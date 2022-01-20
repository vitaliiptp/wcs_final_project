import React, { useState } from "react";
import FeedbackCard from "./global/feedbackCard";
import data from "../data.json";
import FeedbackCategories from "./feedbackCategories";
import LogoCard from "./global/logoCard";
import Header from "./global/header";

const Feedbacks = () => {
  const allCategories = [
    "All",
    "UX",
    "UI",
    ...new Set(data.productRequests.map((item) => item.category)),
  ];

  const [items, setItems] = useState(data.productRequests);
  const [feedbackButtonCat, setFeedbackButtonCat] = useState(allCategories);

  const filterCategory = (button) => {
    if (button === "All") {
      setItems(data.productRequests);
      return;
    }
    const filteredCategory = data.productRequests.filter(
      (item) => item.category === button
    );
    setItems(filteredCategory);
  };

  return (
    <div className="flex px-[10.3rem] py-[5.875rem]">
      <div className="flex flex-col">
        <LogoCard />
        <FeedbackCategories
          categories={feedbackButtonCat}
          filterCategory={filterCategory}
        />
      </div>
      <div className="flex flex-col">
        <Header />
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
      </div>
    </div>
  );
};

export default Feedbacks;
