import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
export default function Sidebar({ setItemText }) {
  return (
    <div className="sidebar">
      <AddItemForm setItemText={setItemText} />
      <ButtonGroup />
    </div>
  );
}
