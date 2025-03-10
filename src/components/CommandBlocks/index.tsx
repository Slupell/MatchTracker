import { statusMap } from "@/constants";
import Image from "next/image";
import { Matches } from "@/Types/ITypes";
import React from "react";

export const CommandBlocks = ({ games }: { games: Matches[] | null }) => {
  if (!games) return <p>Нет данных</p>;
  return (
    <div className="pt-[20px] pr-[42px] pb-[42px] pl-[42px] content-center items-center ">
      {games?.map((item: Matches, index: number) => (
        <ul
          key={index}
          className="h-[87px] max-w-full mb-4 bg-[#212427] rounded-sm "
        >
          <div className="flex flex-wrap items-center justify-between p-4 content-end">
            <div className="flex  justify-center items-center content-between gap-[14px] flex-row-reverse">
              {item.awayTeam.name}{" "}
              <Image
                src="/illustrationsRole.svg"
                alt="illustrationsRole"
                width={48}
                height={48}
                priority
              />
            </div>
            <div className="flex flex-col items-center justify-center content-center gap-[4px] ">
              {`${item.awayScore} : ${item.homeScore}`}
              <br />
              <div
                className={`status flex justify-center items-center  rounded-md p-[6px] w-[92px] h-[27px]  ${
                  statusMap[item.status]?.className || ""
                }`}
              >
                {statusMap[item.status]?.label || "Unknown"}
              </div>
            </div>
            <div className="flex  justify-center items-center content-between gap-[14px]">
              {item.homeTeam.name}
              <Image
                src="/illustrationsRole.svg"
                alt="illustrationsRole"
                width={48}
                height={48}
                priority
              />
            </div>
          </div>
        </ul>
      ))}
    </div>
  );
};
