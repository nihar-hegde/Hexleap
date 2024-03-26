import Image from "next/image";
import React from "react";

export const AddCard = () => {
  return (
    <div className="hidden xl:flex flex-col items-center p-2 bg-card-bg-dark w-[237px] min-h-[511px] relative">
      <div className="relative">
        <Image
          src={"/add.png"}
          alt={"Add Image"}
          width={217}
          height={217}
          className="relative"
        />
        <div className="absolute top-0 right-0 bg-black  px-3 py-1 text-xs text-white font-semibold rounded-none">
          Ad
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 p-4">
        <p className="font-semibold text-white mt-3 truncate">
          Advertisement title
        </p>
        <p className="text-[#DFDFDF] text-sm line-clamp-5 xl:line-clamp-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
