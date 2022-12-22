import React from "react";
import './App.scss';
import { Navbar, Heroe, About, Work, Skills } from "./components/components";

function App() {
  return (
    <div className="app">
		<Navbar />
		<Heroe />
		<br />
		<About />
		<Work />
		<Skills />
	</div>
  )
}

export default App;
