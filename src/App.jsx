import React from "react";
import './App.scss';
import { Navbar, Heroe, Work, ContactMe } from "./components/components";

function App() {
  return (
    <div className="app">
		<Navbar />
		<Heroe />
		<Work />
		<ContactMe />

		<div className="app__wrapper app__flex app__primarybg">
	 		<div className="copyright">
				<p className="p-text">©{new Date().getFullYear()} Albana</p>
			</div>
		</div>
	</div>
  )
}

export default App;
