import {
  ArrowDownIcon,
  ChartBarIcon,
  ChevronDownIcon,
  GlobeEuropeAfricaIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const TableContent = () => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-white bg-[#246da1] uppercase ">
          <tr>
            <th
              scope="col"
              className="py-3 px-6 flex gap-1 justify-Start items-center"
            >
              <GlobeEuropeAfricaIcon className="h-6 w-6" />
              Regional Super 50
            </th>
            <th scope="col" className="py-3 px-6">
              1
            </th>
            <th scope="col" className="py-3 px-6">
              2
            </th>
            <th scope="col" className="py-3 px-6">
              1
            </th>
            <th scope="col" className="py-3 px-6">
              x
            </th>
            <th scope="col" className="py-3 px-6 justify-center">
              <ChevronDownIcon className="h-4 w-4" />
              Total
            </th>
            <th scope="col" className="py-3 px-6">
              U
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white ">
            <th
              scope="row"
              className="py-4 flex flex-row justify-around items-center px-6 font-medium text-gray-900 whitespace-nowrap border-r-2 "
            >
              {/* right */}
              <div className="items-start">
                <p> ZUMRAN GUTBARO</p>
              </div>
              {/* left */}
              <div className="items-end justify-end space-y-3 ">
                <p className="flex items-end gap-1"> <StarIcon className="h-4 w-4" /> 0/0</p>
                <p>109/3</p>
                <p className="flex gap-1"> <ChartBarIcon className="h-4 w-4" /> +62.2</p>
              </div>
            </th>
            <td className="py-4 px-6">Sliver</td>
            <td className="py-4 px-6">Laptop</td>
            <td className="py-4 px-6">$2999</td>
            <td className="py-4 px-6">$2999</td>
            <td className="py-4 px-6">$2999</td>
            <td className="py-4 px-6">$2999</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
