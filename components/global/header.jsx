import React from "react";
import SortBtn from "../global/sortBtn";
import HeaderIcon from "./svg/headerIcon";
import Button from "../Buttons/button";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-start w-[51.563rem] h-[4.5rem] mb-[1.5rem] rounded-[0.625rem] bg-blue-dark">
      <div className="m-[1.5rem]">
        <HeaderIcon />
      </div>
      <div className="mr-[1rem] text-b-18_w">6 Suggestions</div>
      <div>
        <SortBtn />
      </div>
      <div className="mr-[1rem] ml-[15.4rem]">
        <Button type="button" buttonStyle="btn--purple" buttonSize="btn--large">
          + Add Feedback
        </Button>
      </div>
    </div>
  );
};

export default Header;
