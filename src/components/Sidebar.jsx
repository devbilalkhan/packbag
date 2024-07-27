import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
export default function Sidebar({ setItemText, handleAddItem}) {
  return (
    <div className="sidebar">
      <AddItemForm setItemText={setItemText} handleAddItem={handleAddItem}/>
      <ButtonGroup />
    </div>
  );
}
