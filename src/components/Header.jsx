import Logo from "./Logo";
import Counter from "./Counter";

export default function Header({ numOfItems, handlePackedItemsTotal }) {
  return (
    <header>
      <Logo />
      <Counter
        numOfItems={numOfItems}
        onPackedItemsTotal={handlePackedItemsTotal}
      />
    </header>
  );
}
