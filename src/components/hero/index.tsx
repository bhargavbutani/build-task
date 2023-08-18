import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="text-white mt-10">
      <h1 className="mb-4 text-4xl whitespace-nowrap font-bold tracking-wide leading-none uppercase  text-gray-900 md:text-5xl lg:text-8xl dark:text-white">
        Lorem ipsum
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div className="md:my-0 my-10">
          <h1 className="font-bold text-lg leading-[0.75rem]">DOLER SIT</h1>
          <p className="leading-7 text-[#FFFFFF]   opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laboriosam autem laudantium veritatis blanditiis assumenda expedita
            odio quaerat et commodi fugit eaque, distinctio quam earum, est
            sequi ea voluptate quidem!
          </p>
          <div className="mt-5">
            <Image
              className=" mr-2"
              src="/icon1.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="md:my-0 my-10">
          <h1 className="font-bold text-lg leading-[0.75rem]">DOLER SIT</h1>
          <p className="leading-7 text-[#FFFFFF]   opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laboriosam autem laudantium veritatis blanditiis assumenda expedita
            odio quaerat et commodi fugit eaque, distinctio quam earum, est
            sequi ea voluptate quidem!
          </p>
          <div className="mt-5">
            <Image
              className=" mr-2"
              src="/icon2.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="md:my-0 my-10">
          <Image
            className="mr-2"
            src="/img-1.png"
            alt="logo"
            width={500}
            height={500}
          />
          <h1 className="font-bold text-lg leading-[0.75rem] my-2">
            DOLER SIT
          </h1>
          <p className="leading-7 text-[#FFFFFF]   opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laboriosam autem laudantium veritatis blanditiis assumenda expedita
            odio quaerat et commodi fugit eaque, distinctio quam earum, est
            sequi ea voluptate quidem!
          </p>
          <div className="mt-5">
            <Image
              className=" mr-2"
              src="/icon3.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
