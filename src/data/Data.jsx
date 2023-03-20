import { TbListDetails } from "react-icons/tb";
import { TiExport } from "react-icons/ti";
import { TfiUnlink } from "react-icons/tfi";
import { BiLink } from "react-icons/bi";
import { BsFillCollectionFill } from "react-icons/bs";

export const FeaturesData = [
  {
    id: 1,
    title: "Product Details",
    icon: <TbListDetails />,
    description:
      "Our product is a Shopify scraper that extracts product data from Shopify stores with ease.",
  },
  {
    id: 2,
    title: "Exporting specified collections",
    icon: <TiExport />,
    description:
      "Exporting specified collections is a powerful solution to quickly extract specific data sets.",
  },
  {
    id: 3,
    title: "Export product links",
    icon: <BiLink />,
    description:
      "Exporting product links enables you to extract a list of product URLs, allowing for easy analysis and processing of product data.",
  },
  {
    id: 4,
    title: "Export collections",
    icon: <BsFillCollectionFill />,
    description:
      "Exporting collections allows for quick and efficient extraction of specific data sets from a database or application, saving time and effort.",
  },
  {
    id: 5,
    title: "One Click Export",
    icon: <TfiUnlink />,
    description:
      "One-click export is a streamlined solution for exporting data with a single click, reducing the time and effort required for data extraction.",
  },
];

import HowFast from "../assets/blog/how_fast.webp";
import EarnMore from "../assets/blog/earn-more.webp";
import Capital from "../assets/blog/Capital_Impact_Graphic_Main_Image.webp";
import Market from "../assets/blog/Shopify_Markets_blog_header.webp";
import Strategy from "../assets/blog/marketing-strategy-header.webp";

export const BlogsData = [
  {
    id: 1,
    title: "Shopify: A Sustained Success Story",
    img: HowFast,
    description:
      "Data and metrics were pulled from publiccomps.com — the best benchmarking tool & platform for...",
    link: "https://medium.com/@albertwang23/shopify-a-sustained-success-story-c2facddaa21",
  },
  {
    id: 2,
    img: EarnMore,
    title: "Earn More",
    description:
      "The commerce industry is one of constant growth and constant change. To be successful, merchants need to adapt...",
    link: "https://www.shopify.com/partners/blog/earn-more-plus",
  },
  {
    id: 3,
    img: Capital,
    title: "Shopify Capital's Effect ",
    description:
      "There’s no magic formula for business success. And success is different from one business to the next...",
    link: "https://www.shopify.com/blog/capital-effect-on-business-growth",
  },
  {
    id: 4,
    img: Market,
    title: "Grow Your Business Globally",
    description:
      "The meteoric rise of ecommerce has paved the way for the global online sales boom, with 22% of total worldwide...",
    link: "https://www.shopify.com/blog/shopify-markets",
  },
  {
    id: 5,
    img: Strategy,
    title: "The 5-Step Marketing Strategy",
    description:
      "“We can be deceived into thinking the present state will last forever,” says Taylor Holiday, the Managing Partner of... ",
  },
];
