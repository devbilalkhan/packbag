import Logo from "./Logo";
import Counter from "./Counter";

export default function Header({ numOfItems }) {
  return (
    <header>
      <Logo />
      <Counter numOfItems={numOfItems} />
    </header>
  );
}
