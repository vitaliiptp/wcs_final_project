import React, {useContext} from "react";
import Link from 'next/link'
import SortBtn from "../global/sortBtn";
import HeaderIcon from "./svg/headerIcon";
import Button from "./button";
import AppContext from "../../context/AppContext";

const Header = () => {
    const { suggestionsCount } = useContext(AppContext);


    return (
    <div className="flex flex-row items-center justify-start w-[51.563rem] h-[4.5rem] mb-[1.5rem] rounded-[0.625rem] bg-blue-dark">
      <div className="m-[1.5rem]">
        <HeaderIcon />
      </div>
      <div className="text-b-18_w">{suggestionsCount > 1 ? `${suggestionsCount} Suggestions` : `${suggestionsCount} Suggestion`}</div>
      <div>
        <SortBtn />
      </div>
      <div className="mr-[1rem] ml-[14.5rem]">
        <Button type="button" buttonStyle="btn--purple" buttonSize="btn--large">
          <Link href="/add-feedback">
            <a className="text-b-14_w">+ Add Feedback</a>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
