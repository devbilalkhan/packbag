import ReactSelect from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
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

export default function ItemList({
  itemText,
  handleDeleteEachItem,
  handleItemToggle,
}) {
  const [sortBy, setSortBy] = useState("default");
  const sortedItems = useMemo(
    () =>
      [...itemText].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        } else if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [itemText, sortBy]
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
        <ListItem
          key={item.id}
          item={item}
          onDeleteEachItem={handleDeleteEachItem}
          onToggleItem={handleItemToggle}
        />
      ))}
    </ul>
  );
}

function ListItem({ item, onDeleteEachItem, onToggleItem }) {
  return (
    <>
      <li className="item">
        <label>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => {
              onToggleItem(item.id);
            }}
          />
          {item.name}
        </label>
        <button
          onClick={() => {
            onDeleteEachItem(item.id);
          }}
        >
          ❌
        </button>
      </li>
    </>
  );
}
