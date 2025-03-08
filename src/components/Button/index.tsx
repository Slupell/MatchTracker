import React from "react";

export const ButtonRefresh = ({ fetchData }: { fetchData: () => void }) => {
  return (
    <div className="refresh" onClick={fetchData}>
      <button className="refreshBtn">Обновить</button>
    </div>
  );
};
