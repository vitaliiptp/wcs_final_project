import React from "react";
import Button from "../components/Buttons/button";
import SortBtn from "../components/global/SortBtn";
import Feedbacks from "../components/feedbacks";
import RoadMapSidebar from "../components/global/roadMapSidebar";

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
    </div>
  );
};


export default Home;
