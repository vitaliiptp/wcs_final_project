import React from "react";
import Button from "../components/button";
import SortBtn from "../components/sortBtn";
import Feedbacks from "../components/feedbacks";
import RoadMapSidebar from "../components/global/roadMapSidebar";
import ArrowLeft from "../components/global/svg/arrowLeft";

const Home = () => {
  return (
    <div>
      <div className="h-40 w-screen flex items-center justify-center bg-gradient-to-r from-blue-gradient via-purple-gradient to-pink-gradient font-medium text-6xl">
        Page for testing Tailwind
      </div>

      <RoadMapSidebar/>

      <Button type="button" buttonStyle="btn--blue" buttonSize="btn--medium">
        Edit Feedback
      </Button>
      <Button type="button" buttonStyle="btn--purple" buttonSize="btn--medium">
        Post Comment
      </Button>
      <Button type="button" buttonStyle="btn--cancel" buttonSize="btn--large">
        Cancel
      </Button>
      <Button type="button" buttonStyle="btn--delete" buttonSize="btn--large">
        Delete
      </Button>
      <Button type="button" buttonStyle="btn--purple" buttonSize="btn--large">
        Save Changes
      </Button>

      <SortBtn />
        <Feedbacks />
        <div className="flex flex-row justify-center items-center bg-purple-gradient">
            <ArrowLeft />
            <p>Go back</p>
        </div>
    </div>
  );
};


export default Home;
