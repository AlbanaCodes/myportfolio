import React from "react";
import './App.scss';
import { Navbar, Heroe, About } from "./components/components";

function App() {
  return (
    <div className="app">
		<Navbar />
		<Heroe />
		<br />
		<About />
	</div>
  )
}

export default App;
