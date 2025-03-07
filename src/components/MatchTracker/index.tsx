import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

export const MatchTracker: React.FC = () => {
  const [matches, setMatches] = useState<string[]>([]);

  useEffect(() => {
    const fetchDate = async () => {
      const response = await axios.get(
        "https://app.ftoyd.com/fronttemp-service/fronttemp"
      );
      console.log(response);
      return response.data;
    };
    fetchDate();
  }, []);

  return (
    <div>
      <div>
        <Image
          src="/MatchTracker.svg"
          alt="MatchTracker"
          width={271}
          height={30}
        />
        <span>
          Ошибка: Не удалось загрузить информацию <button>Обновить</button>
        </span>
        <ul>
          {matches.map((game, index) => (
            <li key={index}>
              <span>{game}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
