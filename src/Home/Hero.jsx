import React from "react";
import Chrome from "../assets/icons/chrome.svg";
import Brave from "../assets/icons/brave.svg";
import Chromium from "../assets/icons/chromium.svg";
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

          <a
            href="https://chrome.google.com/webstore/detail/scrape-sopify/aopgicojoddojlhodfdkmcbfjgainpff"
            target="_blank"
            data-aos="fade-up"
            class=" flex cursor-pointer justify-center items-center gap-2 mt-4 bg-gradient-to-r from-gray-400 to-green-500 hover:from-green-500 hover:to-gray-400 text-white font-bold py-3 px-3 rounded-md border-2 border-white duration-300"
          >
            <span className="text-white text-xl">
              Add to your favourite browser
            </span>
          </a>
          <div className="flex justify-center items-center mt-4 gap-2">
            <a
              href="https://chrome.google.com/webstore/detail/scrape-sopify/aopgicojoddojlhodfdkmcbfjgainpff"
              target="_blank"
            >
              <img
                src={Chrome}
                className="object-cover w-12 h-12 hover:scale-110 duration-300"
              />
            </a>
            <a
              href="https://chrome.google.com/webstore/detail/scrape-sopify/aopgicojoddojlhodfdkmcbfjgainpff"
              target="_blank"
            >
              <img
                src={Chromium}
                className="object-cover w-12 h-12 hover:scale-110 duration-300"
              />
            </a>
            <a
              href="https://chrome.google.com/webstore/detail/scrape-sopify/aopgicojoddojlhodfdkmcbfjgainpff"
              target="_blank"
            >
              <img
                src={Brave}
                className="object-cover w-12 h-12  hover:scale-110 duration-300"
              />
            </a>
          </div>
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
