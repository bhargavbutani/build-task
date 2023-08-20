import Image from "next/image";
import React, { useState } from "react";

const About = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <article className={`mt-20 py-10 relative ${hovered ? "bg-hovered" : ""}`}>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 transition-all`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          height: "400px",
        }}
      >
        <div className="relative">
          <h1 className="mb-4 font-bold tracking-tight leading-none text-8xl text-white">
            ABOUT <br /> US
          </h1>
          <div className="absolute top-20 left-40">
            <Image
              className={`mr-2 rounded-full ${hovered ? "hidden" : ""}`}
              src="/img-4.png"
              alt="a person standing in a room with a mirror"
              width={230}
              height={230}
            />
          </div>
        </div>
        <div className="leading-7 md:m-0 mt-20 text-[#FFFFFF] opacity-70">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas odio
          odit non voluptas optio assumenda debitis recusandae id quo beatae
          provident quaerat itaque harum quia, accusantium ullam fugiat
          perferendis quasi. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Velit laborum quia explicabo tenetur perferendis officiis!
          Tempore culpa ipsum quisquam repudiandae deserunt inventore?
          Doloremque alias suscipit, nulla hic quod eligendi ullam!
        </div>
      </div>
    </article>
  );
};

export default About;
