import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");

  //setState triggers the rendering of the component

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const width = window.screen.width;
    if (width > 640) {
      setColor("transparent");
    } else {
      setColor("#1A2238");
    }
    if (!nav) {
      setColor("transparent");
    }
  }, [nav]);

  //useEffect, react hook gets run whenever we the component is mounted or unmounted. So useeffect runs every time you render the component, it runs in the background, it can be used to
  //Data fetching, setting up a subscription, and manually changing the DOM

  return (
    <nav className="max-w-[1240px] sticky flex items-center justify-between flex-wrap p-6 z-10">
      <Link
        className="flex items-center flex-grow text-white mr-6 z-10"
        href="/"
      >
        <Image
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          src="/icons/logo_32x32.png"
          alt="icon"
        ></Image>
        <span className="font-semibold text-xl tracking-tight">Weather</span>
      </Link>
      <div className="w-full sm:items-center sm:w-auto hidden sm:flex">
        <div className="text-md mr-12 items-end">
          <Link
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div onClick={handleNav} className="block sm:hidden z-10">
        {nav ? (
          <AiOutlineClose size={25} color="white" />
        ) : (
          <AiOutlineMenu size={25} color="white" />
        )}
      </div>
      <div
        className={
          nav
            ? "absolute top-0 right-0 left-0 bottom-0 text-center flex justify-center items-center flex-col sm:hidden w-full h-screen ease-in duration-300"
            : "absolute top-0 right-0  bottom-0 text-center flex justify-center items-center flex-col sm:hidden w-full h-screen  ease-in duration-300 left-[-100%]"
        }
        style={{ backgroundColor: color }}
      >
        <Link
          href="/contact"
          className="text-4xl p-4 text-white hover:text-gray-500"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};
