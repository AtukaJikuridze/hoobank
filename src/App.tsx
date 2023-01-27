import React from "react";
import {
  Footer,
  Header,
  Navbar,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
