import React from "react";
import Image from "next/image";
import { ErrorFile } from "../Error";

export const ButtonRefresh = ({
  fetchData,
  err,
}: {
  fetchData: () => void;
  err: string | null;
}) => {
  return (
    <div
      className="flex pb-[0] pr-[42px]  flex-row content-end items-baseline justify-between"
      onClick={fetchData}
    >
      <div className="pt-[53px] pb-[13px] pl-[42px]">
        <Image
          src="/MatchTracker.svg"
          alt="MatchTracker"
          width={257}
          height={32}
          priority
        />
      </div>
      <div className="flex flex-row items-center gap-[12px]  ">
        {err && <ErrorFile />}
        <button className="w-[204px] h-[56px] rounded-sm cursor-pointer  bg-[#eb0237] gap-[12px]">
          Обновить
        </button>
      </div>
    </div>
  );
};
