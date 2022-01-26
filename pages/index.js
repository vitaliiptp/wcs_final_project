import React from "react";
import Feedbacks from "../components/feedbacks";
import LogoCard from "../components/logoCard";
import FeedbackCategories from "../components/feedbackCategories";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="flex px-[10.3rem] py-[5.875rem]">
      <div className="flex flex-col">
        <LogoCard />
        <FeedbackCategories />
      </div>
      <div className="flex flex-col">
        <Header />
        <Feedbacks />
      </div>
    </div>
  );
}
