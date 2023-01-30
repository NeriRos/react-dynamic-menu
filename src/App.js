import "./App.css";

import { Menu } from "./components/Menu/Menu";
import { items } from "./data";

function App() {
  return (
    <div className="App">
      <Menu items={items} />
    </div>
  );
}

export default App;
