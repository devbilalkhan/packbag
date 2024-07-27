import { create } from "zustand";
import { defaultItems } from "../lib/constants";
create((set) => ({
  items: defaultItems,
  removeAllitems: () => {
    set(() => ({ items: [] }));
  },

  resetToInitial: () => {
    set(() => ({ items: defaultItems }));
  },
  itemToggle: (id) => {
    set((state) => {
      const newItems = state.map((itm) => {
        if (itm.id === id) {
          return {
            ...itm,
            packed: !itm.packed,
          };
        }
        return itm;
      });
      return {
        items: newItems,
      };
    });
  },
  markAllComplete: () => {
    const newItems = set((state) => {
      state.map((itm) => {
        return { ...itm, packed: true };
      });
      return {
        items: newItems,
      };
    });
  },
  markAllInComplete: () => {
    set((state) => {
      const newItems = state.map((itm) => {
        return { ...itm, packed: false };
      });
      return { items: newItems };
    });
  },
  deleteEachItem: (id) => {
    set((state) => {
      const filteredItems = state.filter((itm) => itm.id !== id);
      return { items: filteredItems };
    });
  },
  handlePackedItems : () => {
    return items.filter((itm) => itm.packed === true).length;
  };
}));
