import React from "react";
import IllustrationEmpty from "./global/svg/illustrationEmpty";
import Link from "next/link";
import Button from "./global/button";

const EmptyFeedback = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[52rem] h-[37.5rem] rounded-[0.625rem] bg-white-normal">
      <IllustrationEmpty />
      <p className="text-b-24 pt-[3.7rem] pb-[1rem]">There is no feedback yet.</p>
      <p className="text-n-16 ">Got a suggestion? Found a bug that needs to be squashed?</p>
      <p className="text-n-16 pb-[3rem]">We love hearing about new ideas to improve our app.</p>
      <Button type="button" buttonStyle="btn--purple" buttonSize="btn--large">
        <Link href="/add-feedback">
          <a className="text-b-14_w">+ Add Feedback</a>
        </Link>
      </Button>
    </div>
  );
};

export default EmptyFeedback;
