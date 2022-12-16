import React from "react";
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
	return(
		<img src={images.logo} alt="logo" />
	)
}

export default Navbar;