import React from "react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Accueil",
    page: "home",
  },
  {
    label: "À Propos",
    page: "about",
  },
  {
    label: "Projets",
    page: "projects",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-purple-600 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <ScrollLink to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold text-white">Mohamed Sami</h2>
              </div>
            </ScrollLink>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-200 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <ScrollLink
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-white hover:text-purple-300 dark:text-gray-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </ScrollLink>
                );
              })}
              {/* Add link to CV */}
              <a
                href="https://github.com/mohammedSamiLakhahal/CV/blob/main/Mohamed%20Sami%20CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 p-2 rounded-xl"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
