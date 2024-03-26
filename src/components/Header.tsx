import { playerData } from "@/constants/data";
import React from "react";
import { PlyerCard } from "./PlyerCard";
import { AddCard } from "./AddCard";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2">
        <p className="text-2xl font-bold text-white ml-16 md:ml-0 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-[#738FFF]">
          Sports
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {playerData.map((item) => (
            <PlyerCard key={item.id} data={item} />
          ))}
          <AddCard />
        </div>

        <div className="">
          <Button className="rounded-sm bg-[#2C9CF0]">Show More</Button>
        </div>
      </div>
    </div>
  );
};
