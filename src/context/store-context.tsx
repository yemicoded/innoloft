import { TStore } from "types/store";
import React from "react";
import useStore from "store/use-store";

export const StoreContext = React.createContext<TStore | null>({} as TStore);

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useStore();
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
