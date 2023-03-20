import React from "react";
import { FeaturesData } from "../data/Data";

const Features = () => {
  return (
    <div className="container px-2  " id="features">
      <h1 className="text-5xl font-roboto font-bold text-white text-center mt-16">
        Features we provide
      </h1>
      <p className="text-xl text-white text-center pt-2">
        Made to improve and ease your daily scraping experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-20">
        {FeaturesData.map((item) => {
          return (
            <div
              className="bg-[#1b1c1d] rounded-lg px-8 py-6 hover:translate-y-2 duration-300 max-w-lg hover:scale-110"
              key={item.id}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              <div className="text-green-300 font-black text-2xl rounded-full ">
                {item.icon}
              </div>
              <h2 className="text-white font-medium text-xl mt-6">
                {item.title}
              </h2>
              <p className="text-gray-400 mt-2">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
