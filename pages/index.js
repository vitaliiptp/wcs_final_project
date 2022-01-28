import React from "react";
import Feedbacks from "../components/feedbacks";
import LogoCard from "../components/global/logoCard";
import FeedbackCategories from "../components/feedbackCategories";
import Header from "../components/global/header";
import RoadMapSidebar from "../components/global/roadMapSidebar";

export default function Home() {
  return (
    <div className="flex px-[10.3rem] py-[5.875rem]">
      <div className="flex flex-col">
        <LogoCard />
        <FeedbackCategories />
        <RoadMapSidebar />
      </div>
      <div className="flex flex-col">
        <Header />
        <Feedbacks />
      </div>
    </div>
  );
}
