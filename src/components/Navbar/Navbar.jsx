import React from "react";
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
	return(
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>
		</nav>
	)
}

export default Navbar;