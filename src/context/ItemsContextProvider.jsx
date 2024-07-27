import { createContext, useEffect, useState } from "react";
import { defaultItems } from "../lib/constants";

export const ItemContext = createContext();

export default function ItemsContextProvider({ children }) {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(
    () => itemsFromLocalStorage || defaultItems
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleMarkAllComplete = () => {
    setItems(
      items.map((itm) => {
        return { ...itm, packed: true };
      })
    );
  };
  const handleMarkAllInComplete = () => {
    setItems(
      items.map((itm) => {
        return { ...itm, packed: false };
      })
    );
  };
  const handleResetToInitials = () => {
    setItems(defaultItems);
  };
  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleDeleteEachItem = (id) => {
    setItems((prev) => prev.filter((itm) => itm.id !== id));
  };

  const handleItemToggle = (id) => {
    const newItems = items.map((itm) => {
      if (itm.id === id) {
        return {
          ...itm,
          packed: !itm.packed,
        };
      }
      return itm;
    });
    setItems(newItems);
  };

  const handlePackedItems = () => {
    return items.filter((itm) => itm.packed === true).length;
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <ItemContext.Provider
      value={{
        items,
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
