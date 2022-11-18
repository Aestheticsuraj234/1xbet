import React from "react";
import Accumulator from "./Accumulator";
import Carousels from "./Carousels";
import Table from "./Table";

const Herosection = () => {
  return (
    <div className="grid grid-col-2  m-2 bg-[#0c314d]">
      <section>
        <div>
          <Carousels />
          <div className="flex justify-between h-[44px] items-center w-[full] bg-[#144466] space-x-1">
            {/* RIght div */}
            <div className="items-start text-white font-bold text-center ">
              Live
            </div>
            {/* Left div */}
            <div className="item-end">
              <p className="border-[#0c314d] px-3 bg-[#175f96] hover:bg-[#2c7ab5] hover:shadow-xl box-border rounded-xl text-center p-1 m-2 text-bold font-xs text-white">
                see all live bets
              </p>
            </div>
          </div>
          <Table />
          <Accumulator />
        </div>
      </section>
      <section className="">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
