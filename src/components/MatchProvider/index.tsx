import { useFetch } from "@/hooks";
import React, { createContext, ReactNode } from "react";

export type FetchContextType = ReturnType<typeof useFetch>;

export const MyContext = createContext<FetchContextType>({
  games: [],
  fetchData: async () => {},
  loading: false,
  err: null,
});

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { games, fetchData, err, loading } = useFetch();
  return (
    <>
      <MyContext.Provider value={{ games, fetchData, err, loading }}>
        {children}
      </MyContext.Provider>
    </>
  );
};
