import { useState } from "react";
import { defaultItems } from "../lib/constants";
export default function ItemList() {
  const [items, setItems] = useState(defaultItems);
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function ListItem({ item }) {
  return (
    <>
      <li className="item">
        <label>
          <input type="checkbox" checked={item.packed} />
          {item.name}
        </label>
        <button onClick={() => {}}>❌</button>
      </li>
    </>
  );
}
