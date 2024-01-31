import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="inline-block h-24 w-24 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
