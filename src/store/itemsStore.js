import { create } from "zustand";
import { defaultItems } from "../lib/constants";
export const useItemStore = create((set) => ({
  items: defaultItems,
  addItems: (newItemsText) => {
    const newItems = {
      id: new Date().now(),
      name: newItemsText,
      packed: false,
    };

    set((state) => {
      return {
        item: [...state, newItems],
      };
    });
  },
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
  packedItems: () => {
    set((state) => {
      const filteredItem = state.filter((itm) => itm.packed === true).length;
      return {
        item: filteredItem,
      };
    });
  },
}));
