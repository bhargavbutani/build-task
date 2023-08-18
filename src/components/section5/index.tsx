import Image from "next/image";
import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  activeIndex: number;
  index: number;
  toggleAccordion: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  activeIndex,
  index,
  toggleAccordion,
}) => {
  return (
    <div className="mt-10 mb-5">
      <div
        className={` ${
          activeIndex === index ? "accordian" : ""
        } rounded p-2 mb-2 `}
      >
        <div className="flex justify-around px-5">
          <div>
            <p className="text-white uppercase">{title}</p>
          </div>
          <div>
            <button
              onClick={toggleAccordion}
              className="w-full text-left text-white font-semibold focus:outline-none"
            >
              {activeIndex === index ? (
                <Image
                  className=" mr-2"
                  src="/add.svg"
                  alt="logo"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  className=" mr-2"
                  src="/remove.svg"
                  alt="logo"
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex justify-center">
          <div className="mt-2 mb-5 flex justify-around max-w-[67rem] leading-7 mx-5  text-[#a1a1a1]">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

const Accordion: React.FC = () => {
  const items = [
    {
      title: " Lorem ipsum dolor sit amet",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam autem laudantium veritatis blanditiis assumenda expedita odio quaerat et commodi fugit eaque, distinctio quam earum, est sequi ea voluptate quidem!",
    },
    {
      title: " Lorem ipsum dolor sit amet",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam autem laudantium veritatis blanditiis assumenda expedita odio quaerat et commodi fugit eaque, distinctio quam earum, est sequi ea voluptate quidem!",
    },
    {
      title: " Lorem ipsum dolor sit amet",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam autem laudantium veritatis blanditiis assumenda expedita odio quaerat et commodi fugit eaque, distinctio quam earum, est sequi ea voluptate quidem!",
    },
    {
      title: " Lorem ipsum dolor sit amet",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam autem laudantium veritatis blanditiis assumenda expedita odio quaerat et commodi fugit eaque, distinctio quam earum, est sequi ea voluptate quidem!",
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          activeIndex={activeIndex}
          index={index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
