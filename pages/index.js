import React from "react";
import Feedbacks from "../components/feedbacks";
import Logo from "../components/logo";
import FeedbackCategories from "../components/feedbackCategories";
import RoadMapSidebar from "../components/global/roadMapSidebar";
import Header from "../components/header";


export default function Home() {
  return (
    <div className="flex px-[10.3rem] py-[5.875rem]">
      <div className="flex flex-col">
        <Logo />
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
