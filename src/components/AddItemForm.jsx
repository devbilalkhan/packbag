import { useRef, useState } from "react";
import Button from "./Button";
import Warning from "./Warning";
export default function AddItemForm({ setItemText, handleAddItem }) {
  const [listItem, setListItem] = useState("");
  const [warning, setWarning] = useState("");

  const inputRef = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!listItem) {
      setWarning("No items were entered!");
      inputRef.current.focus();
      return;
    }
    handleAddItem(listItem);
    setListItem("");
  };
  return (
    <form onSubmit={handleFormSubmit}>
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
