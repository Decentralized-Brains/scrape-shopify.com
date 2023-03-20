import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const GoToTop = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button className="top-btn" onClick={goToBtn}>
      <div className="h-10 w-10 bg-green-300 rounded-full">
        <BiUpArrowAlt className=" text-black  flex justify-center items-center mx-auto h-full text-2xl" />
      </div>
    </button>
  );
};

export default GoToTop;
