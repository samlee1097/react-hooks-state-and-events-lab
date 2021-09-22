import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [Mode, setMode] = useState(false);
  const appButtonMode = Mode ? "Dark Mode" : "Light Mode";
  const appClass = Mode ? "App dark" : "App light";

  function handleDarkMode(){
    if (Mode === false){
      setMode(true);
    } else {
      setMode(false);
    }
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{appButtonMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
