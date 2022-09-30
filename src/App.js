import React from 'react'
import { About, Contact, Footer, Home, Navbar, Skills, Work } from "./components";



function App() {
  document.title = "Web Profile"

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
