import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import Logo from "../assets/logo-white.png";

const Transbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "features",
    },
    {
      id: 3,
      link: "blogs",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div
        className={
          shadow
            ? " w-full h-[70px] duration-300 z-[10] "
            : " w-full h-[70px] duration-300 z-[10] "
        }
      >
        {/* this is for large screen devices */}
        <div className="flex justify-between items-center h-[70px] max-w-6xl mx-auto text-white font-medium px-2 md:px-0">
          <div>
            <img src={Logo} alt="shopify" className="h-10 w-60" />
          </div>
          <ul className="hidden md:flex justify-around items-center">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer capitalize hover:scale-105 duration-200 px-8"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      {/* this is for small screen devices */}

      <div
        className={
          nav
            ? "fixed h-screen left-0 top-0 w-[80%] text-white ease-in duration-500 backdrop-blur-lg z-40 flex md:hidden"
            : "fixed h-screen left-[-100%] w-[80%] top-0 ease-in duration-500 backdrop-blur-lg z-40"
        }
      >
        <ul className="p-8">
          <div>
            <img src={Logo} alt="shopify" className="h-10 w-60" />
          </div>
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-4">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transbar;
