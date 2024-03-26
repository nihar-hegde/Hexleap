import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
  collection: string;
}
export const TicketCard = ({ data }: { data: Props }) => {
  return (
    <div className="relative flex flex-col p-3 items-center gap-4  bg-card-bg-dark w-[257px] min-h-[624px]">
      <Image
        src={data.imageUrl}
        alt={data.name}
        layout="responsive"
        height={226}
        width={400}
      />
      <div className=" border-[#818A97] mt-1  mx-5 border border-dashed w-full ">
        <div className="absolute rounded-full w-5 h-5 bg-[#201b2a] -mt-2 -left-2"></div>
        <div className="absolute rounded-full w-5 h-5 bg-[#201b2a] -mt-2 -right-2"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-1 ">
        <p className="font-semibold text-white truncate">{data.name}</p>
        <p className="text-gray-400  text-sm truncate">
          OCT 15 | SUN | 4:30 PM
        </p>
        <p className="text-sm text-white text-center line-clamp-1 md:line-clamp-none">
          {data.address}
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <Button className="rounded-sm w-full ">{data.collection}</Button>
      </div>
    </div>
  );
};
