export default function Counter({ numOfItems, onPackedItemsTotal }) {
  return (
    <div className="counter">
      <b>
        {onPackedItemsTotal} / {numOfItems}
      </b>{" "}
      items packed
    </div>
  );
}
