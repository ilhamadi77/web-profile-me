import React from 'react'
import { Home, Navbar } from "./components";



function App() {
  document.title = "Web Profile"

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
