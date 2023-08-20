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
                    /* Other styling properties */
                }}
            >
                <div className="relative">
                    <h1 className="mb-4 font-bold tracking-tight leading-none text-8xl text-white">
                        ABOUT <br /> US
                    </h1>
                    <div className="absolute top-20 left-40">
                        <Image
                            className={`mr-2 rounded-full ${
                                hovered ? "hidden" : ""
                            }`}
                            src="/img-4.png"
                            alt="a person standing in a room with a mirror"
                            width={230}
                            height={230}
                        />
                    </div>
                </div>
                <div className="leading-7 mt-20 text-[#FFFFFF] opacity-70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </div>
            </div>
        </article>
    );
};

export default About;
