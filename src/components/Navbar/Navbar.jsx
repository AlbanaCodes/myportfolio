import React from "react";
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
	return(
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>
			<ul>
				{ ['home', 'about', 'skills', 'work', 'contact'].map((item) => (
					<li key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				  ))
				}
			</ul>
		</nav>
	)
}

export default Navbar;