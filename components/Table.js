import {
  GlobeAmericasIcon,
  HandRaisedIcon,
  HeartIcon,
  PuzzlePieceIcon,
  RectangleGroupIcon,
  StarIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import TableContent from "./TableContent";

const Table = () => {
  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-3 w-full ">
        <table className="w-full truncate text-sm text-left text-blue-100 ">
          <thead className="text-xs rounded-md truncateext-white uppercase bg-[#144466] ">
            <tr className="flex">
              <th
                scope="col"
                className="py-3 px-6 truncate flex gap-1 items-center justify-center"
              >
                <TableCellsIcon className="h-6 w-6" />
                All
              </th>
              <th
                scope="col"
                className="py-3 px-6 truncate flex gap-1 items-center justify-center"
              >
                <PuzzlePieceIcon className="h-6 w-6" />
                Cricket
              </th>
              <th
                scope="col"
                className="py-3 px-6 truncate flex gap-1 items-center justify-center "
              >
                <GlobeAmericasIcon className="h-6 w-6" />
                Football
              </th>
              <th
                scope="col"
                className="py-3 px-6 truncate flex gap-1 items-center justify-center"
              >
                <TableCellsIcon className="h-6 w-6" />
                Table Tennis
              </th>
              <th
                scope="col"
                className="py-3 px-6 truncate flex gap-1 items-center justify-center hover:border-b-[#6fe33d]-2 "
              >
                <HandRaisedIcon className="h-6 w-6" />
                Action
              </th>
              <th
                scope="col"
                className="py-3 px-6 truncate flex gap-1 items-center justify-center"
              >
                <HeartIcon className="h-6 w-6" />
                Basket-Ball
              </th>
              <th
                scope="col"
                className="py-3 px-6 truncate flex gap-1 items-center justify-center"
              >
                <RectangleGroupIcon className="h-6 w-6" />
                Tennis
              </th>
              <th
                scope="col"
                className="py-3 px-6 truncate flex gap-1 items-center justify-center"
              >
                <StarIcon className="h-6 w-6" />
                ice-hockey
              </th>
            </tr>
          </thead>
          {/* Table content */}
          <TableContent />
          <TableContent />
          <TableContent />
        </table>
      </div>
    </div>
  );
};

export default Table;
