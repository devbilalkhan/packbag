import { useState } from "react";
import BackgroundHeader from "./components/BackgroundHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { defaultItems } from "./lib/constants";
function App() {
  const [itemText, setItemText] = useState(defaultItems);
  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...itemText, newItem];
    setItemText(newItems);
  };
  return (
    <>
      <BackgroundHeader />
      <main>
        <Header numOfItems={itemText.length} />
        <ItemList itemText={itemText} setItemText={setItemText} />
        <Sidebar setItemText={setItemText} handleAddItem={handleAddItem} />
      </main>
      <Footer />
    </>
  );
}

export default App;
