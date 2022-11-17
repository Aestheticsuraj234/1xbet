import React from "react";

const current = new Date();
// By default US English uses 12hr time with AM/PM
const time = current.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});
import {
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
  ClockIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  LanguageIcon,  
  PaperAirplaneIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#0c314d] border-[#134e7a] border-b-2 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <div className="flex items-center space-x-1">
            <button
              type="button"
              className="text-white bg-[#145180] hover:bg-[#0d4e80] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              <ComputerDesktopIcon className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="text-white bg-[#145180] hover:bg-[#0d4e80] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              <DevicePhoneMobileIcon className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="text-white bg-[#145180] hover:bg-[#0d4e80] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              <PaperAirplaneIcon className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="text-white bg-[#145180] hover:bg-[#0d4e80] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              <CurrencyDollarIcon className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="text-white bg-[#6fe33d] hover:bg-[#1bdc21] focus:ring-4 focus:ring-blue-300  rounded-lg text-md font-bold px-5 py-2.5 mr-2 mb-2 "
            >
              277889 INR
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <button
              type="button"
              className="text-white flex bg-[#145180] hover:bg-[#0d4e80] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              <ArrowLeftOnRectangleIcon className="h-6 w-6" />
              Logout
            </button>
            <button
              type="button"
              className="text-white flex bg-[#6fe33d] hover:bg-[#1bdc21] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              <PencilIcon className="h-6 w-6" />
              Resgistration
            </button>
            <button
              type="button"
              className="text-white flex bg-[#145180] hover:bg-[#0d4e80] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              <Cog6ToothIcon className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="text-white flex items-center gap-1 bg-[#145180] hover:bg-[#0d4e80] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              <ClockIcon className="h-6 w-6" />
              {time}
            </button>
            <button
              type="button"
              className="text-white flex bg-[#145180] hover:bg-[#0d4e80] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              <LanguageIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
      <nav className="bg-[#0c314d]">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div className="flex items-center justify-between">
            {/* div for logo of Your Organisation */}
            <a href="/hero" className="flex items-center">
              <img
                src="https://1xbet.ng/genfiles/cms/pg/173/images/04965acab0aa3b7d541e91dc24021341.svg"
                className="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-end text-xs font-semibold whitespace-nowrap dark:text-white">
                Nigeria
              </span>
            </a>

            {/* ul classes for links */}
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li className="flex flex-row  space-x-1 textm-md font-medium">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Sports
                </a>
                <ChevronDownIcon className="h-[18px] w-[15px] text-white" />
              </li>
              <li className="flex flex-row  space-x-1 textm-md font-medium">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Live
                </a>
                <ChevronDownIcon className="h-[18px] w-[15px] text-white" />
              </li>
              <li className="flex flex-row  space-x-1 textm-md font-medium">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Cricket
                </a>
                <ChevronDownIcon className="h-[18px] w-[15px] text-white" />
              </li>
              <li className="flex flex-row  space-x-1 textm-md font-medium">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Promo
                </a>
                <ChevronDownIcon className="h-[18px] w-[15px] text-white" />
              </li>
              <li className="flex flex-row  space-x-1 textm-md font-medium">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Casino
                </a>
                <ChevronDownIcon className="h-[18px] w-[15px] text-white" />
              </li>
              <li className="flex flex-row  space-x-1 textm-md font-medium">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  {" "}
                  Live Casino
                </a>
                <ChevronDownIcon className="h-[18px] w-[15px] text-white" />
              </li>
              <li className="flex flex-row  space-x-1 textm-md font-medium">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  1XGames
                </a>
                <ChevronDownIcon className="h-[18px] w-[15px] text-white" />
              </li>
              <li className="flex flex-row  space-x-1 textm-md font-medium">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  E-Sports
                </a>
                <ChevronDownIcon className="h-[18px] w-[15px] text-white" />
              </li>
              <li className="flex flex-row  space-x-1 textm-md font-medium">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  More
                </a>
                <ChevronDownIcon className="h-[18px] w-[15px] text-white" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
