import Image from "next/image";
import React from "react";

interface Props {
  id: number;
  name: string;
  totalEvents: number;
  sports: string;
  imageurl: string;
}

export const PlyerCard = ({ data }: { data: Props }) => {
  return (
    <div className="p-2 bg-card-bg-dark w-[237px] min-h-[511px]">
      <Image src={data.imageurl} alt={data.name} width={300} height={300} />
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-white turncate mt-3">{data.name}</p>
        <div className="flex p-2  items-center gap-8  bg-[#292B32]">
          <div className="flex flex-col items-start">
            <p className="text-[#DFDFDF] text-sm">Total Events</p>
            <p className="text-white font-semibold">
              {data.totalEvents} Events
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[#DFDFDF] text-sm">Sports</p>
            <p className="text-white font-semibold">{data.sports}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
