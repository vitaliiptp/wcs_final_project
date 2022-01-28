import React from "react";
import Feedbacks from "../components/feedbacks";
import Logo from "../components/logo";
import FeedbackCategories from "../components/feedbackCategories";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="flex px-[10.3rem] py-[5.875rem]">
      <div className="flex flex-col">
        <Logo />
        <FeedbackCategories />
      </div>
      <div className="flex flex-col">
        <Header />
        <Feedbacks />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
    // const res = await fetch("http://localhost:3000/api/reviews");
    // const data = await res.json();
    // if (!data) {
    //   return {
    //     notFound: true,
    //   }
    // }

    console.log("test")
    return {
        props: {reviews: true}
    };
}