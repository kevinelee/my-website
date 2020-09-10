import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";


export default function Header() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
          <div className="relative h-full max-w-screen-xl mx-auto"></div>
        </div>

        <div className="relative py-6">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-4 md:justify-center">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto"></div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                <a
                  href=""
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  <Link
                    activeClass="active"
                    to="section0"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{cursor: "pointer" }}
                  >
                    Home
                  </Link>
                </a>
                <a
                  href=""
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  style={{cursor: "pointer" }}
                >
                  <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{cursor: "pointer" }}
                  >
                    About Me
                  </Link>
                </a>
                <a
                  style={{cursor: "pointer" }}
                  href=""
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{cursor: "pointer" }}
                  >
                    Applications
                  </Link>
                </a>
                <a
                  href=""
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{cursor: "pointer" }}
                  >
                    Skills
                  </Link>
                </a>
                <a
                  href=""
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  <Link
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{cursor: "pointer" }}
                  >
                    Contact Me
                  </Link>
                </a>
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow"></span>
              </div>
            </nav>
          </div>

          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md">
              <div
                className="rounded-lg bg-white shadow-xs overflow-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
