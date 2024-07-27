export default function Counter({ numOfItems, packedItems }) {
  return (
    <div className="counter">
      <b>
        {packedItems} / {numOfItems}
      </b>{" "}
      items packed
    </div>
  );
}
