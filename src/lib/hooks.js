import { useContext } from "react";
import { ItemContext } from "../context/ItemsContextProvider";

export function useItemsContext() {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error(
      "useItemsContext must be used with in ItemsContextProvider"
    );
  }
  return context;
}
