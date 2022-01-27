import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-blue-deep h-12 w-12 mb-4" />
      <h2 className="text-center text-b-20">Loading...</h2>
      <p className="w-1/3 text-center text-b-16">
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  );
};

export default Loader;
