import React from "react";
import { MdFormatQuote } from "react-icons/md";
import Chrome from "../assets/icons/chrome.png";
import Wave from "react-wavify";

const Hero = () => {
  return (
    <div className="wave-container">
      <div className=" container pb-28 px-2" id="home">
        <div className="flex justify-center items-center flex-col pt-20">
          <h6
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="bg-gradient-to-r from-green-500 to-green-700 text-lg text-white font-medium px-4 py-0.5 rounded-full"
          >
            A smart solution, for smart people
          </h6>

          <h1
            className="text-[60px] font-black text-white text-center mt-4  font-roboto max-w-xl leading-[4rem]"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            Crafted with Scrap UI Shopify
          </h1>

          <p
            className="max-w-2xl text-[26px] text-[#95a2b3] text-center mt-8"
            data-aos="fade-up"
          >
            Streamline Your Life with a Free Shopify Store Scraper Extension
          </p>

          {/* <button
            data-aos="fade-up"
            class=" flex justify-center items-center gap-2 mt-4 bg-gradient-to-r from-gray-400 to-green-500 hover:from-green-500 hover:to-gray-400 text-white font-bold py-1.5 px-3 rounded-md border-2 border-white duration-300"
          >
            <img src={Chrome} alt="" className="h-10 w-10 object-cover" />
            <span className="text-white text-xl">Add to chrome</span>
          </button> */}
        </div>
      </div>

      <div className="relative z-10">
        <Wave
          fill="#A1FFE7"
          paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 4,
          }}
        />
        <div className="absolute bottom-0 left-0 w-full ">
          <Wave
            fill="#13C296"
            paused={false}
            options={{
              height: 20,
              amplitude: 50,
              speed: 0.15,
              points: 5,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
