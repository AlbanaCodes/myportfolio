import React from "react";
import './App.scss';
import { Navbar, Heroe, About, Work } from "./components/components";

function App() {
  return (
    <div className="app">
		<Navbar />
		<Heroe />
		<br />
		<About />
		<Work />
	</div>
  )
}

export default App;
