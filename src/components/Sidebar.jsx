import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
export default function Sidebar({
  setItemText,
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitials,
  handleMarkAllComplete,
  handleMarkAllInComplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm setItemText={setItemText} onAddItem={handleAddItem} />
      <ButtonGroup
        onRemoveAllItems={handleRemoveAllItems}
        onResetToInitials={handleResetToInitials}
        onMarkAllComplete={handleMarkAllComplete}
        onMarkAllInComplete={handleMarkAllInComplete}
      />
    </div>
  );
}
