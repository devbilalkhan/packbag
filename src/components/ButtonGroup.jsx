import Button from "./Button";

import { useItemStore } from "../store/itemsStore";

export default function ButtonGroup() {
  const markAllComplete = useItemStore((state) => state.markAllComplete);
  const markAllInComplete = useItemStore((state) => state.markAllInComplete);
  const resetToInitials = useItemStore((state) => state.resetToInitials);
  const removeAllItems = useItemStore((state) => state.removeAllItems);

  const buttons = [
    { onClick: markAllComplete, label: "Mark all as complete" },
    { onClick: markAllInComplete, label: "Mark all as incomplete" },
    { onClick: resetToInitials, label: "Reset" },
    { onClick: removeAllItems, label: "Remove all items" },
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
