import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <article className="text-white pt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div className="md:my-0 my-10">
          <h1 className="font-bold text-lg leading-[0.75rem]">
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
              src="/icon4.svg"
              alt="Lorem ipsum dolor"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="md:my-0 my-10">
          <h1 className="font-bold text-lg leading-[0.75rem] ">
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
              src="/icon5.svg"
              alt="Lorem ipsum dolor"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div></div>
        <div className="">
          <Image
            className=" mr-2"
            src="/img-2.png"
            alt="a man with green hat and trying to remove headphones to listen what someone is saying"
            width={500}
            height={500}
          />
        </div>
        <div className="md:my-0 my-10">
          <h1 className="font-bold text-lg leading-[0.75rem]">
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
              src="/icon6.svg"
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

export default Section2;
