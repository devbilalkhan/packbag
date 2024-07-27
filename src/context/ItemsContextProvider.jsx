import { createContext, useEffect, useState } from "react";
import { defaultItems } from "../lib/constants";

export const ItemContext = createContext();

export default function ItemsContextProvider({ children }) {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [itemText, setItemText] = useState(
    () => itemsFromLocalStorage || defaultItems
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...itemText, newItem];
    setItemText(newItems);
  };

  const handleMarkAllComplete = () => {
    setItemText(
      itemText.map((itm) => {
        return { ...itm, packed: true };
      })
    );
  };
  const handleMarkAllInComplete = () => {
    setItemText(
      itemText.map((itm) => {
        return { ...itm, packed: false };
      })
    );
  };
  const handleResetToInitials = () => {
    setItemText(defaultItems);
  };
  const handleRemoveAllItems = () => {
    setItemText([]);
  };

  const handleDeleteEachItem = (id) => {
    setItemText((prev) => prev.filter((itm) => itm.id !== id));
  };

  const handleItemToggle = (id) => {
    const newItems = itemText.map((itm) => {
      if (itm.id === id) {
        return {
          ...itm,
          packed: !itm.packed,
        };
      }
      return itm;
    });
    setItemText(newItems);
  };

  const handlePackedItems = () => {
    return itemText.filter((itm) => itm.packed === true).length;
  };
 
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemText));
  }, [itemText]);
  return (
    <ItemContext.Provider
      value={{
        itemText,
        handleAddItem,
        handleDeleteEachItem,
        handleItemToggle,
        handleMarkAllComplete,
        handleMarkAllInComplete,
        handlePackedItems,
        handleResetToInitials,
        handleRemoveAllItems,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}
