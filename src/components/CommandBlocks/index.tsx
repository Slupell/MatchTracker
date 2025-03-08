import { Matches } from "@/Types/ITypes";
import React from "react";

export const CommandBlocks = ({ games }: { games: Matches[] | null }) => {
  if (!games) return <p>Нет данных</p>;
  return (
    <div className="abc">
      {games?.map((item, index) => (
        <ul key={index} className="commands">
          <div className="commandBlock">
            <div className="teams">{item.awayTeam.name}</div>
            <div>
              {`${item.awayScore} : ${item.homeScore}`}
              <br />
              <div className="status">{item.status}</div>
            </div>
            <div className="teams">{item.homeTeam.name}</div>
          </div>
        </ul>
      ))}
    </div>
  );
};
