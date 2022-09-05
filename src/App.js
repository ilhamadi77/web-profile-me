import React from 'react'
import { About, Home, Navbar, Skills } from "./components";



function App() {
  document.title = "Web Profile"

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
