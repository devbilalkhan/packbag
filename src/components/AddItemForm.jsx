import Button from "./Button";
export default function AddItemForm() {
  return (
    <form>
      <h2>Add an item</h2>
      <input
        className=""
        type="text"
        name="item"
        value="Toothbrush..."
        onChange={() => {}}
      />
      <Button>Add an item</Button>
    </form>
  );
}
