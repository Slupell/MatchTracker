import React from "react";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <div>
      <div className="flex pb-[0] pr-[42px]  flex-row content-end items-baseline justify-between">
        <div className="pt-[53px] pb-[13px] pl-[42px]">
          <Image
            src="/MatchTracker.svg"
            alt="MatchTracker"
            width={257}
            height={32}
            priority
            className="w-[257px] h-[32px]"
          />
        </div>
      </div>
    </div>
  );
};
