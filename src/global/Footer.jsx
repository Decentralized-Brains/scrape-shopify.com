import Logo from "../assets/logo-white.png";
import { Link } from "react-scroll";
import React from "react";

const Footer = () => {
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
  return (
    <footer id="contact">
      <div className="container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <img src={Logo} className="h-8 mr-3" alt="Scrap Shopify" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
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
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pb-2">
          For custormer support, please email us at{" "}
          <a
            href="mailto:support@scrape-shopify.com"
            target="_blank"
            className="text-green-400"
          >
            {" "}
            support@scrape-shopify.com
          </a>
        </span>

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©{" "}
          <a
            href="https://decentralizedbrains.com/"
            className="hover:underline "
            target="_blank"
          >
            Decentralizedbrains™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
