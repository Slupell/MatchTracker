import { statusInGameRightNow } from "@/Types/ITypes";

export const baseUrl = process.env.NEXT_PUBLIC_ORGANIZATION_URL;

export const statusMap: Record<
  statusInGameRightNow,
  { className: string; label: string }
> = {
  Scheduled: { className: "bg-orange-500 ", label: "Preparing" },
  Ongoing: { className: "bg-green-500", label: "Live" },
  Finished: { className: "bg-red-500 ", label: "Finished" },
};
