import { useItemsContext } from "../lib/hooks";

export default function Counter() {
  const { handlePackedItems, items } = useItemsContext();
  return (
    <div className="counter">
      <b>
        {handlePackedItems | 0} / {items.length}
      </b>{" "}
      items packed
    </div>
  );
}
