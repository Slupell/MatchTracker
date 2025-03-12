import React, { useContext } from "react";
import Image from "next/image";
import { ErrorFile } from "@/components/Error";

import { MyContext } from "../MatchProvider";

export const Button: React.FC = () => {
  const { err, loading, fetchData } = useContext(MyContext);

  return (
    <div className=" flex flex-row-reverse pr-[42px] content-center items-center ">
      <div className="flex flex-row items-center gap-[12px]  ">
        {err && <ErrorFile />}
        <button
          onClick={fetchData}
          className="w-[204px] h-[56px] rounded-sm cursor-pointer  bg-[#eb0237] gap-[10px] flex flex-row-reverse content-end items-center justify-center "
        >
          {loading ? (
            <Image
              src="/refresh.svg"
              alt="refresh"
              width={26}
              height={26}
              className="transition-all duration-1000 animate-spin w-[26px] h-[26px]"
            />
          ) : null}
          Обновить
        </button>
      </div>
    </div>
  );
};
