import { useItemStore } from "../store/itemsStore";

export default function Counter() {
  const packedItems = useItemStore((state) => state.packedItems);
  const items = useItemStore((state) => state.items);
  return (
    <div className="counter">
      <b>
        {packedItems | 0} / {items.length}
      </b>{" "}
      items packed
    </div>
  );
}
