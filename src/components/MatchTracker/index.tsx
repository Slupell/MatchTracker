// сделать allies
// Попробовать вынести кнопку в children

import { Button } from "@/components/Button";
import { CommandBlocks } from "@/components/CommandBlocks";
import { ContextProvider } from "@/components/MatchProvider";

export const MatchTracker: React.FC = () => {
  return (
    <>
      <ContextProvider>
        <Button />
        <CommandBlocks />
      </ContextProvider>
    </>
  );
};
