import { ticketData } from "@/constants/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { TicketCard } from "./TicketCard";

export const TicketContainer = () => {
  return (
    <div className="flex flex-col items-center gap-2 px-2 lg:px-36 py-8 lg:py-12 bg-gradient-to-b from-card-gradient-1 to-card-gradient-2">
      <h1 className="text-5xl text-white font-bold turncate text-center">
        Collection Spotlight
      </h1>
      <p className="text-md text-gray-400 text-center line-clamp-1 lg:line-clamp-none">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </p>
      <div className="flex items-center justify-center gap-8 ">
        <div className="hidden lg:flex items-center border h-12 w-7 border-[#2C9CF0] text-[#2C9CF0] py-2 px-0.5">
          <ChevronLeft />
        </div>
        <div className="mt-8 grid items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {ticketData.map((item) => (
            <TicketCard key={item.id} data={item} />
          ))}
        </div>
        <div className="hidden lg:flex items-center h-12 w-7 border border-[#2C9CF0] text-[#2C9CF0] py-2 px-0.5">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};
