import Image from "next/image";
import React from "react";
import LineAnimation from "../lineanimation";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" bg-black  text-white">
      <nav className=" mx-auto py-4  items-center">
        <div className="text-xl  font-semibold md:block hidden">
          <div className="flex  items-center">
            <div className="px-5">
              <Link href="/">
                <Image
                  className=" mr-2"
                  src="/logo.png"
                  alt="company logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div>Lorem</div>
          </div>
        </div>
        <div className="md:hidden bg-black">
          <div className="flex items-center px-5 justify-between">
            <div className="text-xl font-semibold ">
              <Link href="/">
                <Image
                  className=" mr-2"
                  src="/logo.png"
                  alt="Main logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div onClick={toggleMenu}>
              {" "}
              {!isMenuOpen ? (
                <Image
                  className=" mr-2"
                  src="/toggle2.svg"
                  alt="Burger menu icon"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  className=" mr-2"
                  src="/close.svg"
                  alt="Close menu icon"
                  width={20}
                  height={20}
                />
              )}
            </div>
          </div>
          {isMenuOpen && (
            <div>
              <div className="flex h-[85vh]   items-center">
                <ul className="mt-2 space-y-6 px-5 ">
                  <li onClick={() => setIsMenuOpen(false)}>
                    <Link
                      href="/loremipsum1"
                      className="hover:text-gray-300 font-medium text-xl tracking-wide uppercase"
                    >
                      lore ipsum
                    </Link>
                  </li>
                  <li onClick={() => setIsMenuOpen(false)}>
                    <Link
                      href="/loremipsum2"
                      className="hover:text-gray-300 font-medium text-xl tracking-wide uppercase"
                    >
                      lore ipsum
                    </Link>
                  </li>
                  <li onClick={() => setIsMenuOpen(false)}>
                    <Link
                      href="/loremipsum3"
                      className="hover:text-gray-300 font-medium text-xl tracking-wide uppercase"
                    >
                      lore ipsum
                    </Link>
                  </li>
                  <li onClick={() => setIsMenuOpen(false)}>
                    <Link
                      href="/loremipsum4"
                      className="hover:text-gray-300 font-medium text-xl tracking-wide uppercase"
                    >
                      lore ipsum
                    </Link>
                  </li>
                  <li onClick={() => setIsMenuOpen(false)}>
                    <Link
                      href="/loremipsum5"
                      className="hover:text-gray-300 font-medium text-xl tracking-wide uppercase"
                    >
                      lore ipsum
                    </Link>
                  </li>
                  <div>
                    <li className="flex justify-between gap-12">
                      <Link
                        href="/#"
                        className="text-[#666666] font-bold  text-xl tracking-wide uppercase"
                      >
                        lore ipsum
                      </Link>
                      <Link
                        href="/#"
                        className="text-[#666666] font-bold  text-xl tracking-wide uppercase"
                      >
                        COMMING SOON
                      </Link>
                    </li>
                  </div>
                </ul>
                {isMenuOpen && (
                  <div className="fixed bottom-0">
                    <LineAnimation />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
