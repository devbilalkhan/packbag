import { useContext } from "react";
import { ItemContext } from "../context/ItemsContextProvider";

export function useItemsContext() {
  const context = useContext(ItemContext);
  return context;
}
