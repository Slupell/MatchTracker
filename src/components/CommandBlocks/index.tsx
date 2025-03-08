import { Matches, statusInGameRightNow } from "@/Types/ITypes";
import React from "react";

const statusMap: Record<
  statusInGameRightNow,
  { className: string; label: string }
> = {
  Scheduled: { className: "statusPreparing", label: "Preparing" },
  Ongoing: { className: "statusLive", label: "Live" },
  Finished: { className: "statusFinished", label: "Finished" },
};

export const CommandBlocks = ({ games }: { games: Matches[] | null }) => {
  if (!games) return <p>Нет данных</p>;
  return (
    <div className="abc">
      {games?.map((item, index) => (
        <ul key={index} className="commands">
          <div className="commandBlock">
            <div className="teams">{item.awayTeam.name}</div>
            <div className="statusBar">
              {`${item.awayScore} : ${item.homeScore}`}
              <br />
              <div className={`status ${statusMap[item.status].className}`}>
                {statusMap[item.status].label}
              </div>
            </div>
            <div className="teams">{item.homeTeam.name}</div>
          </div>
        </ul>
      ))}
    </div>
  );
};
