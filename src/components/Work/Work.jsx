import React, { useState, useEffect } from 'react';
import './Work.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Work = () => {
	const [activeFilter, setActiveFilter] = useState('All')
	const handleWorkFilter = (item) => {};
	const [animateCard, setAnimateCard] = useState([]);
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	useEffect(() => {
	const query ='*[_type == "works"]';

	  client.fetch(query)
	  .then((data) => {
		console.log('data: ', data);
		setWorks(data);
		setFilterWork(data);
	  })
	}, []);
	

	return (
		<>		
			<h2 className="head-text"> My creative <span> Portfolio </span> section.</h2>
			<div className="app__work-filter">
				{
					['JavaScript', 'React', 'Firebase', 'UI/UX', 'All'].map((item, index) => (
						<div key={index}
							onClick={() => handleWorkFilter(item)}
							className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}	>
							{item}
						</div>
					))
				}
			</div>

			<motion.div animate={animateCard}
						transition={{ duration: 0.5, delayChildren: 0.5}}
						className="app__work-portfolio">
						{
							filterWork.map((work, index) => (								
								<div className="app__work-item app__flex" key={index}>
									<div className="app__work-img app_flex">
										<img src={urlFor(work.imgUrl)} alt={work.title} />
									</div>
								</div>
							))
						}
			</motion.div>
		</>
	)
}

export default Work;