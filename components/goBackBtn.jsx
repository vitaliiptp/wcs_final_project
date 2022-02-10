import React from "react";
import Link from "next/link";
import ArrowLeft from "./global/svg/arrowLeft";

const GoBackBtn = ({ route }) => {
  return (
    <Link href={route}>
      <button className="h-[1.25rem ] text-b-14-g flex items-center hover:underline">
        <ArrowLeft stroke="#4661E6" />
        Go Back
      </button>
    </Link>
  );
};

export default GoBackBtn;
