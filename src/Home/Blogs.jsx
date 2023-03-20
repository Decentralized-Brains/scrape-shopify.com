import React from "react";
import { BlogsData } from "../data/Data";
import { BsArrowRight } from "react-icons/bs";

const Blogs = () => {
  return (
    <div className="container px-2 pb-28 " id="blogs">
      <h1 className="text-5xl font-roboto font-bold text-white text-center mt-16">
        Blogs
      </h1>
      <p className="text-xl text-white text-center pt-2">
        Here are some blogs that you might find interesting
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
        {BlogsData.map((item) => {
          return (
            <div
              className="group"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              key={item.id}
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt=" random imgee"
                  className="w-full h-72 object-cover object-center rounded-lg shadow-md border border-gray-800"
                />
                <div className="absolute bg-black h-full w-full top-0 rounded-lg bg-opacity-50"></div>
              </div>
              <div className="relative px-2 -mt-20 group-hover:-mt-44 duration-300">
                <div className="bg-gray-400 bg-opacity-70 p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-extrabold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-white">{item.description}</p>

                  <a
                    href={item.link}
                    className="text-green-300 text-sm flex gap-2 items-center"
                    target="_blank"
                  >
                    Read Full Blog <BsArrowRight />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
