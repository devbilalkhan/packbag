export default function ItemList({
  itemText,
  handleDeleteEachItem,
  handleItemToggle,
}) {
  return (
    <ul>
      {itemText.map((item) => (
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
