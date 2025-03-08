import Image from "next/image";
import { useFetch } from "@/Api";
import { ButtonRefresh } from "../Button";
import { CommandBlocks } from "../CommandBlocks";

export const MatchTracker: React.FC = () => {
  const { games, loading, err, fetchData } = useFetch();
  if (loading) return <p className="loader">..</p>;
  if (err) return <p>Ошибка: {err}</p>;
  return (
    <div>
      <div>
        <Image
          src="/MatchTracker.svg"
          alt="MatchTracker"
          width={271}
          height={30}
        />
        <ButtonRefresh fetchData={fetchData} />
        <CommandBlocks games={games} />
      </div>
    </div>
  );
};
