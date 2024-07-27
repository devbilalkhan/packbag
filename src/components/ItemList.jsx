import ReactSelect from "react-select";
import EmptyView from "./EmptyView";
import { useContext, useMemo, useState } from "react";
import { useItemsContext } from "../lib/hooks";
const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  const { items } = useItemsContext();
  const [sortBy, setSortBy] = useState("default");
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        } else if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );
  return (
    <ul>
      {sortedItems.length === 0 ? (
        <EmptyView />
      ) : (
        <section className="sorting">
          <ReactSelect
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}
      {sortedItems.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function ListItem({ item }) {
  const { handleItemToggle, handleDeleteEachItem } = useItemsContext();
  return (
    <>
      <li className="item">
        <label>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => {
              handleItemToggle(item.id);
            }}
          />
          {item.name}
        </label>
        <button
          onClick={() => {
            handleDeleteEachItem(item.id);
          }}
        >
          ❌
        </button>
      </li>
    </>
  );
}
