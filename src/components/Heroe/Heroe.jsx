import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Heroe.scss';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	}
}

const Heroe = () => {
	return(
		<div className='app__heroe app__flex'>
			<motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}
						transition={{ duration: 1 }}
						className='app__heroe-info'>
				<div className='app__heroe-badge'>
					<div className='badge-cmp app__flex'>
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className='p-text'>Hello, I am</p>
							<h1>Albana</h1>
						</div>
					</div>
					<div className='tag-cmp app__flex'>
						<p className='p-text'>Front-end</p>
						<p className='p-text'>Web Developer</p>
					</div>
				</div>
			</motion.div>

			<motion.div variants={scaleVariants}
						whileInView={scaleVariants.whileInView}
						className='app__heroe-circles'>
			{
				[images.sass, images.javascript, images.html].map((circle, index) => (
					<div className='circle-cmp app__flex' key={`circle-${index}`}>
						<img src={circle} alt="circle" />
					</div>
				))
			}
			</motion.div>
		</div>
	)
}

export default AppWrap(Heroe, 'home');