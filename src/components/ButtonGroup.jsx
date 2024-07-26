import Button from "./Button";
import { sidebarButtonLabels } from "../lib/constants";
export default function ButtonGroup() {
  return (
    <section className="button-group">
      {sidebarButtonLabels.map((item) => (
        <Button key={item.id} label={item.label} type="secondary">
          {item.label}
        </Button>
      ))}
    </section>
  );
}
