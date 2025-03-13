import React from "react";
import Image from "next/image";

export const ErrorFile = () => {
  return (
    <div className="flex gap-[12px] w-[480px] h-[56px] flex-row content-between items-center justify-center bg-black-error rounded-sm ">
      <Image
        src="/alertTriangle.svg"
        alt="alertTriangle"
        width={28}
        height={28}
      />
      ошибка: не удалось загрузить информацию
    </div>
  );
};
