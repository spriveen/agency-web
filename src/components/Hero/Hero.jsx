import Image from "next/image";
import React from "react";
import img from "../../assets/hero.jpg";
import { BsArrowRightCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <div className=" min-h-[80vh] container flex flex-col justify-center lg:flex-row lg:justify-between items-center">
      {/* hero content section  */}
      <div className=" space-y-8">
        <h1
          data-aos="fade-up"
          data-aos-delay="600"
          className=" text-5xl w-full md:w-3/4 font-bold leading-tight"
        >
          Boost Your Business with Our Support
          <BsArrowRightCircle className=" inline ml-5" />
        </h1>
        <p data-aos="fade-up" data-aos-delay="800" className=" w-full md:w-3/4">
        Partner with us to leverage tailored strategies that drive growth and enhance your market presence. Our dedicated team is here to support you every step of the way
         ensuring your business reaches its fullest potential.
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="1000"
          className=" bg-[#a1fc83] px-6 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0)] rounded-md cursor-pointer"
        >
          Get Started
        </button>
      </div>

      {/* hero img section  */}
      <div
        data-aos="zoom-in"
        className=" w-full lg:w-2/4 mt-14 lg:mt-0 ring-8 lg:ring-[15px] border-2 border-black rounded-md"
      >
        <Image src={img} alt="img" className=" rounded-md" />
      </div>
    </div>
  );
};

export default Hero;
