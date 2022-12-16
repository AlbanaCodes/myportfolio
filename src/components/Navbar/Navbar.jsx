import React, { useState } from "react";
import { images } from '../../constants';
import './Navbar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
	// this is the state of the menu toggle
	const [toggle, setToggle] = useState(false);

	return(
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{ 
					['home', 'about', 'skills', 'work', 'contact'].map((item) => (
						<li className="app_flex p-text" key={`link-${item}`}>
							<div />
							<a href={`#${item}`}>{item}</a>
						</li>
					))
				}
			</ul>

			{/* navbar for smaller screen resoution devices */}
			<div className="app__navbar-menu-toggle">
				<HiMenuAlt4 onClick={() => setToggle(true)}/>
				{
					toggle && (
						<motion.div whileInView={{x: [300, 0]}} transition={{duration: 1, ease: 'easeOut'}}>
							<HiX onClick={() => setToggle(false)} />
							<ul>
							{ 
								['home', 'about', 'skills', 'work', 'contact'].map((item) => (
									<li className="app_flex p-text" key={`link-${item}`}>
										<div />
										<a href={`#${item}`}>{item}</a>
									</li>
								))
							}
							</ul>
						</motion.div>
					)
				}
			</div>
		</nav>
	)
}

export default Navbar;