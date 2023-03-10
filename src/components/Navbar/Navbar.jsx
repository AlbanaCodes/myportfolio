import React, { useState } from 'react';
import { images } from '../../constants';
import './Navbar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const listItems = ['home', 'work', 'contact'];

	return(
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<a href='#home'><img src={images.logo} alt="logo" /></a>
			</div>
			<ul className="app__navbar-links">
			{
				listItems.map((item) => (
					<li className="app__flex p-text" key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))
			}
			</ul>

			{/* navbar toggle for smaller screen resoution devices */}
			<div className="app__navbar-menu-toggle">
				<HiMenuAlt4 onClick={() => setToggle(true)} />
				{
					toggle && (
						<motion.div whileInView={{x: [300, 0]}} transition={{duration: 1, ease: 'easeOut'}}>
							<HiX onClick={() => setToggle(false)} />
							<ul>
							{ 
								listItems.map((item) => (
									<li key={item}>
										<a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
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