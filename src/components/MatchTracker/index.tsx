import { useFetch } from "@/hooks";
import { ButtonRefresh } from "../Button";
import { CommandBlocks } from "../CommandBlocks";

export const MatchTracker: React.FC = () => {
  const { games, fetchData, err } = useFetch();

  return (
    <div>
      <ButtonRefresh fetchData={fetchData} err={err} />
      <CommandBlocks games={games} />
    </div>
  );
};
