import { useEffect, useState } from "react";
import BackgroundHeader from "./components/BackgroundHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { defaultItems } from "./lib/constants";
function App() {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [itemText, setItemText] = useState(
    () => itemsFromLocalStorage || defaultItems
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...itemText, newItem];
    setItemText(newItems);
  };

  const handleMarkAllComplete = () => {
    setItemText(
      itemText.map((itm) => {
        return { ...itm, packed: true };
      })
    );
  };
  const handleMarkAllInComplete = () => {
    setItemText(
      itemText.map((itm) => {
        return { ...itm, packed: false };
      })
    );
  };
  const handleResetToInitials = () => {
    setItemText(defaultItems);
  };
  const handleRemoveAllItems = () => {
    setItemText([]);
  };

  const handleDeleteEachItem = (id) => {
    setItemText((prev) => prev.filter((itm) => itm.id !== id));
  };

  const handleItemToggle = (id) => {
    const newItems = itemText.map((itm) => {
      if (itm.id === id) {
        return {
          ...itm,
          packed: !itm.packed,
        };
      }
      return itm;
    });
    setItemText(newItems);
  };

  const handlePackedItems = () => {
    return itemText.filter((itm) => itm.packed === true).length;
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemText));
  }, [itemText]);
  return (
    <>
      <BackgroundHeader />
      <main>
        <Header
          numOfItems={itemText.length}
          handlePackedItemsTotal={handlePackedItems()}
        />
        <ItemList
          itemText={itemText}
          handleItemToggle={handleItemToggle}
          handleDeleteEachItem={handleDeleteEachItem}
        />
        <Sidebar
          setItemText={setItemText}
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitials={handleResetToInitials}
          handleMarkAllComplete={handleMarkAllComplete}
          handleMarkAllInComplete={handleMarkAllInComplete}
        />
      </main>
      <Footer />
    </>
  );
}
export default App;
