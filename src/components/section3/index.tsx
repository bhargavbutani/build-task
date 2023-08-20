import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <article className="mt-10">
      <h1 className="mb-4 text-4xl font-extrabold tracking-wide  leading-none uppercase md:text-5xl lg:text-6xl text-white">
        Lorem ipsum <br /> dolor sit
      </h1>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="md:my-0 my-10">
          <h1 className="font-bold text-white text-lg leading-[0.75rem]">
            LOREM IPSUM DOLOR
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
              src="/icon7.svg"
              alt="Lorem ipsum dolor"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="md:my-0 my-10">
          <h1 className="font-bold text-lg text-white leading-[0.75rem]">
            LOREM IPSUM DOLOR
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
              src="/icon8.svg"
              alt="Lorem ipsum dolor"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div></div>
        <div>
          <Image
            className=" mr-2"
            src="/img-5.png"
            alt="a man with laughing face with blushing cheeks"
            width={500}
            height={500}
          />
        </div>
        <div className="md:my-0 my-10">
          <h1 className="font-bold text-lg  leading-[0.75rem] text-white">
            LOREM IPSUM DOLOR
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
              src="/icon9.svg"
              alt="Lorem ipsum dolor"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Section3;
