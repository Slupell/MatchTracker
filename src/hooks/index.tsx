import { baseUrl } from "@/constants";
import { Matches } from "@/Types/ITypes";
import axios from "axios";

import { useEffect, useState } from "react";

export const useFetch = () => {
  const [games, setGames] = useState<Matches[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}`);
      const data = response.data;
      setGames(data.data.matches);
      setError(null);
    } catch {
      setError("Произошла ошибка при поиске данных");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { games, fetchData, loading, err };
};
