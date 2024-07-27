import Button from "./Button";

export default function ButtonGroup() {
  const buttons = [
    { onClick: onMarkAllComplete, label: "Mark all as complete" },
    { onClick: onMarkAllInComplete, label: "Mark all as incomplete" },
    { onClick: onResetToInitials, label: "Reset" },
    { onClick: onRemoveAllItems, label: "Remove all items" },
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
