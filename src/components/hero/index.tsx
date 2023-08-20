import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <article className="text-white mt-10">
            <h1 className="mb-4 text-4xl whitespace-nowrap font-bold tracking-wide leading-none uppercase  text-white md:text-5xl lg:text-8xl dark:text-white">
                Lorem ipsum
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                <div className="md:my-0 my-10">
                    <h1 className="font-bold text-lg leading-[0.75rem]">
                        DOLER SIT
                    </h1>
                    <p className="leading-7 text-[#FFFFFF]   opacity-70">
                        Lorem ipsum dolor sit amet consectetur. In nibh nam vel
                        lacus sit. Neque venenatis mattis est nibh sed quis vel
                        quis eu. In tincidunt faucibus aliquet quis sed sed.
                        Phasellus non at lacus convallis elementum. Suspendisse
                        tincidunt congue sem turpis. Nulla eu lorem cras leo.
                    </p>
                    <div className="mt-5">
                        <Image
                            className=" mr-2"
                            src="/icon1.svg"
                            alt="Doler sit"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className="md:my-0 my-10">
                    <h1 className="font-bold text-lg leading-[0.75rem]">
                        LOREM IPSUM DOLOR SIT
                    </h1>
                    <p className="leading-7 text-[#FFFFFF]   opacity-70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae laboriosam autem laudantium veritatis
                        blanditiis assumenda expedita odio quaerat et commodi
                        fugit eaque, distinctio quam earum, est sequi ea
                        voluptate quidem!
                    </p>
                    <div className="mt-5">
                        <Image
                            className=" mr-2"
                            src="/icon2.svg"
                            alt="Doler sit"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className="md:my-0 my-10">
                    <Image
                        className="mr-2"
                        src="/img-1.png"
                        alt="smiling woman in front of a coca cola vending machine"
                        width={500}
                        height={500}
                    />
                    <h1 className="font-bold text-lg leading-[0.75rem] my-2 mt-6">
                        LOREM IPSUM DOLOR SIT
                    </h1>
                    <p className="leading-7 text-[#FFFFFF]   opacity-70">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                    </p>
                    <div className="mt-5">
                        <Image
                            className=" mr-2"
                            src="/icon3.svg"
                            alt="Donec sit"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Hero;
