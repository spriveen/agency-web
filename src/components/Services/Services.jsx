import React from "react";
import ServiceCard from "./ServiceCard";
import { MdOutlineWeb } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

const serviceData = [
  {
    id: 1,
    icon: <MdOutlineWeb size={45} />,
    title: "Web Design",
    color: "bg-tertiary",
  },
  {
    id: 2,
    icon: <FaCode size={45} />,
    title: "Development",
    color: "bg-secondary",
  },
  {
    id: 3,
    icon: <GiShoppingBag size={45} />,
    title: "Ecommerce",
    color: "bg-primary",
  },
];

const Services = () => {
  return (
    <div className=" min-h-screen container flex flex-col justify-center items-center gap-10 py-10">
      <h1
        data-aos="fade-up"
        className=" text-3xl lg:text-5xl font-bold text-center w-full lg:w-3/4"
      >
       Streamline your business management with our services
      </h1>
      <p
        data-aos="fade-up"
        className=" text-sm lg:text-base w-full lg:w-3/4 text-center"
      >
        Our services are designed to simplify your business operations, allowing you to focus on growth and 
        innovation. Experience increased efficiency and productivity 
        as we handle the complexities of management for you.
      </p>

      <div
        data-aos="fade-up"
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {serviceData.map((ele) => (
          <ServiceCard
            id={ele.id}
            icon={ele.icon}
            title={ele.title}
            color={ele.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
