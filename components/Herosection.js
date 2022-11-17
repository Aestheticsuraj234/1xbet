import React from "react";
import Accumulator from "./Accumulator";
import Carousels from "./Carousels";
import Table from "./Table";

const Herosection = () => {
  return (
    <div className="flex flex-col justify-between m-2 bg-[#0c314d]">
      <div>
        <Carousels />
        <div className="flex justify-between h-[44px] items-center w-[65%] bg-[#144466] space-x-1">
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
        <Accumulator/>
      </div>
    </div>
  );
};

export default Herosection;
