import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  const {
    handleMarkAllComplete,
    handleMarkAllInComplete,
    handleResetToInitials,
    handleRemoveAllItems,
  } = useItemsContext();
  const buttons = [
    { onClick: handleMarkAllComplete, label: "Mark all as complete" },
    { onClick: handleMarkAllInComplete, label: "Mark all as incomplete" },
    { onClick: handleResetToInitials, label: "Reset" },
    { onClick: handleRemoveAllItems, label: "Remove all items" },
  ];

  return (
    <section className="button-group">
      {buttons.map(({ label, onClick }, index) => (
        <Button key={index} buttonType="secondary" onClick={onClick}>
          {label}
        </Button>
      ))}
    </section>
  );
}
