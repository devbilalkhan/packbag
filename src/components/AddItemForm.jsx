import { useRef, useState } from "react";
import Button from "./Button";
import Warning from "./Warning";

import { useItemStore } from "../store/itemsStore";

export default function AddItemForm() {
  const addItem = useItemStore((state) => state.addItem);
  const [listItem, setListItem] = useState("");
  const [warning, setWarning] = useState("");

  const inputRef = useRef();
  const FormSubmit = (e) => {
    e.preventDefault();

    if (!listItem) {
      setWarning("No items were entered!");
      inputRef.current.focus();
      return;
    }
    addItem(listItem);
    setListItem("");
  };
  return (
    <form onSubmit={FormSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        className=""
        type="text"
        name="item"
        value={listItem}
        placeholder="Phone charger"
        autoFocus
        onChange={(e) => setListItem(e.target.value)}
      />
      <Warning message={warning} />
      <Button>Add an item</Button>
    </form>
  );
}
