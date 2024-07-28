import { create } from "zustand";
import { defaultItems } from "../lib/constants";
export const useItemStore = create((set) => ({
  items: defaultItems,
  addItem: (newItemText) => {
    const newItems = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    set((state) => {
      return {
        items: [...state.items, newItems],
      };
    });
  },
  removeAllItems: () => {
    set(() => {
      return {
        items: [],
      };
    });
  },

  resetToInitials: () => {
    set(() => ({ items: defaultItems }));
  },
  itemToggle: (id) => {
    set((state) => {
      const newItems = state.items.map((itm) => {
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
    set((state) => {
      const newItems = state.items.map((itm) => {
        return { ...itm, packed: true };
      });
      return {
        items: newItems,
      };
    });
  },
  markAllInComplete: () => {
    set((state) => {
      const newItems = state.items.map((itm) => {
        return { ...itm, packed: false };
      });
      return { items: newItems };
    });
  },
  deleteEachItem: (id) => {
    set((state) => {
      const filteredItems = state.items.filter((itm) => itm.id !== id);
      return { items: filteredItems };
    });
  },
  packedItems: () => {
    set((state) => {
      const filteredItem = state.items.filter(
        (itm) => itm.packed === true
      ).length;
      return {
        item: filteredItem,
      };
    });
  },
}));
