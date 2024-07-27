import { useContext } from "react";
import { ItemContext } from "../context/ItemsContextProvider";

export default function Counter() {
  const { itemText } = useContext(ItemContext);
  const totalPacked = itemText.filter((item) => item.packed === true);
  return (
    <div className="counter">
      <b>
        {totalPacked} / {itemText.length}
      </b>{" "}
      items packed
    </div>
  );
}
