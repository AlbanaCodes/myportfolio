import React from "react";
import './App.scss';
import { Navbar, Heroe, About, Work, Skills } from "./components/components";

function App() {
  return (
    <div className="app">
		<Navbar />
		<Heroe />
		<About />
		<Work />
		<Skills />

		<div className="app__wrapper app__flex">
	 		<div className="copyright">
				<p className="p-text">©{new Date().getFullYear()} Albana</p>
			</div>
		</div>
	</div>
  )
}

export default App;
