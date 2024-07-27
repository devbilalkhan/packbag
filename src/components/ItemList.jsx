export default function ItemList({ itemText, setItemText }) {
  return (
    <ul>
      {itemText.map((item) => (
        <ListItem key={item.id} item={item} setItemText={setItemText} />
      ))}
    </ul>
  );
}

function ListItem({ item, setItemText }) {
  return (
    <>
      <li className="item">
        <label>
          <input type="checkbox" checked={item.packed} onChange={() => {}} />
          {item.name}
        </label>
        <button
          onClick={() =>
            setItemText((prev) => prev.filter((itm) => itm.id !== item.id))
          }
        >
          ❌
        </button>
      </li>
    </>
  );
}
