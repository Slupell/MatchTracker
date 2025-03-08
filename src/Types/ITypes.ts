export interface Matches {
  title: string;
  homeTeam: {
    name: string;
    players: [
      {
        username: string;
        kills: number;
      }
    ];
    points: number;
    place: number;
    total_kills: number;
  };
  awayTeam: {
    name: string;
    players: [
      {
        username: string;
        kills: number;
      }
    ];
    points: number;
    place: number;
    total_kills: number;
  };
  homeScore: number;
  awayScore: number;
  status: statusInGameRightNow;
}

export type statusInGameRightNow = "Scheduled" | `Ongoing` | `Finished`;
