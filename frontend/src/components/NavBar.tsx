import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full bg-pink-900 z-5">
      <nav className="flex flex-col lg:flex-row justify-between text-pink-900 mt-5 font-sans w-full items-center px-5 lg:px-30 py-4 bg-gray-100 shadow z-50">
        <div className="flex w-full justify-between">
          <div>Lapaataa Foundation</div>
          {!isOpen && (
            <AiOutlineMenu
              className="size-8 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          {isOpen && (
            <IoClose
              className="size-8 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        <div className=" hidden lg:flex text-center gap-x-1">
          <div className="relative group hover:border-b-3 p-2">
            <div className="flex items-center gap-1">
              About
              <span className="transition-transform group-hover:rotate-180">
                ▾
              </span>
            </div>
            <div
              className="absolute p-2 mt-3 left-0 mt-5 w-60 shadow-lg rounded
               opacity-0 invisible bg-gray-100
               group-hover:opacity-100 group-hover:visible
               transition-all duration-200 font-sans text-sm text-pink-800"
            >
              <div className="block text-left text-pink-900 border-pink-900 px-4 py-2 hover:border-b-2">
                About Us
              </div>
              <div className="block text-left px-4 py-2 border-pink-900  hover:border-b-2">
                Our Mission & Vision
              </div>
              <div className="block text-left px-4 py-2 border-pink-900  hover:border-b-2">
                Our Team
              </div>
              <div className="block text-left px-4 py-2 border-pink-900  hover:border-b-2">
                Partnership
              </div>
            </div>
          </div>
          <div className="relative group hover:border-b-3 p-2">
            <div className="flex items-center gap-1">
              Services
              <span className="transition-transform group-hover:rotate-180">
                ▾
              </span>
            </div>
            <div
              className="absolute  bg-gray-100 p-2 mt-3 left-0 mt-5 w-60 shadow-lg rounded
               opacity-0 invisible
               group-hover:opacity-100 group-hover:visible
               transition-all duration-200 font-sans text-sm text-pink-800"
            >
              <div className=" text-left  block text-pink-900 border-pink-900 px-4 py-2 hover:border-b-2">
                Health
              </div>
              <div className="block text-left px-4 py-2 border-pink-900  hover:border-b-2">
                Education
              </div>
              <div className="block text-left px-4 py-2 border-pink-900  hover:border-b-2">
                Housing
              </div>
              <div className="block px-4 text-left py-2 border-pink-900  hover:border-b-2">
                Climate Smart Agriculture
              </div>
              <div className="block px-4 text-left  py-2 border-pink-900  hover:border-b-2">
                Youth Empowerment
              </div>
            </div>
          </div>
          <div className="relative group hover:border-b-3 p-2">
            <div className="flex items-center gap-1">
              Events
              <span className="transition-transform group-hover:rotate-180">
                ▾
              </span>
            </div>
            <div
              className="absolute p-2 mt-3 left-0 mt-5 w-60 shadow-lg rounded
               opacity-0 invisible bg-gray-100
               group-hover:opacity-100 group-hover:visible
               transition-all duration-200 font-sans text-sm text-pink-800"
            >
              <div className="block text-left   px-4 py-2 border-pink-900  hover:border-b-2">
                Upcoming Events
              </div>
              <div className="block text-left   px-4 py-2 border-pink-900  hover:border-b-2">
                Past Events
              </div>
            </div>
          </div>
          <div className="border-pink-900hover:border-b-2 p-2">Media</div>
          <div className="border-pink-900  hover:border-b-2 p-2">Careers</div>
          <div className="border-pink-900  hover:border-b-2 p-2">Contact</div>
          <button className="bg-pink-900 border-pink-900  hover:border-b-2 text-gray-100">
            Partnership
          </button>
        </div>
        {isOpen && (
          <div className="flex lg:hidden w-full bg-gray-100 text-left flex-col gap-x-1">
            <div className="relative group hover:border-b-3 p-2">
              <div className="flex items-center gap-1">
                About
                <span className="transition-transform group-hover:rotate-180">
                  ▾
                </span>
              </div>
              <div
                className="absolute p-2 left-0 w-100 rounded
               opacity-0 invisible bg-gray-100
               group-hover:opacity-100 group-hover:visible
               transition-all duration-200 font-sans text-sm text-pink-800  group-hover:relative"
              >
                <div className="block text-left text-pink-900 border-pink-900 px-4 py-2 hover:border-b-2">
                  About Us
                </div>
                <div className="block text-left px-4 py-2 border-pink-900  hover:border-b-2">
                  Our Mission & Vision
                </div>
                <div className="block text-left px-4 py-2 border-pink-900  hover:border-b-2">
                  Our Team
                </div>
                <div className="block text-left px-4 py-2 border-pink-900  hover:border-b-2">
                  Partnership
                </div>
              </div>
            </div>
            <div className="relative group hover:border-b-3 p-2">
              <div className="flex items-center gap-1">
                Services
                <span className="transition-transform group-hover:rotate-180">
                  ▾
                </span>
              </div>
              <div
                className="absolute p-2 left-0 w-full rounded
               opacity-0 invisible bg-gray-100
               group-hover:opacity-100 group-hover:visible
               transition-all duration-200 font-sans text-sm text-pink-800 group-hover:relative"
              >
                <div className=" text-left  block text-pink-900 border-pink-900 px-4 py-2 hover:border-b-2">
                  Health
                </div>
                <div className="block text-left px-4 py-2 border-pink-900  hover:border-b-2">
                  Education
                </div>
                <div className="block text-left px-4 py-2 border-pink-900  hover:border-b-2">
                  Housing
                </div>
                <div className="block px-4 text-left py-2 border-pink-900  hover:border-b-2">
                  Climate Smart Agriculture
                </div>
                <div className="block px-4 text-left  py-2 border-pink-900  hover:border-b-2">
                  Youth Empowerment
                </div>
              </div>
            </div>
            <div className="relative group hover:border-b-3 p-2">
              <div className="flex items-center gap-1">
                Events
                <span className="transition-transform group-hover:rotate-180">
                  ▾
                </span>
              </div>
              <div
                className="absolute p-2 left-0 w-full
               opacity-0 invisible bg-gray-100
               group-hover:opacity-100 group-hover:visible
               transition-all duration-200 font-sans text-sm text-pink-800 group-hover:relative"
              >
                <div className="block text-left   px-4 py-2 border-pink-900  hover:border-b-2">
                  Upcoming Events
                </div>
                <div className="block text-left   px-4 py-2 border-pink-900  hover:border-b-2">
                  Past Events
                </div>
              </div>
            </div>
            <div className="border-pink-900hover:border-b-2 p-2">Media</div>
            <div className="border-pink-900  hover:border-b-2 p-2">Careers</div>
            <div className="border-pink-900  hover:border-b-2 p-2">
              Contact Us
            </div>
            <button className="bg-pink-900 border-pink-900  hover:border-b-2 text-gray-100">
              Partnership
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
