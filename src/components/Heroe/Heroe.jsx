import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Heroe.scss';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

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
	const [experiences, setExperiences] = useState([]);
  	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const query = '*[_type == "experiences"]';
		const skillsQuery = '*[_type == "skills"]';

		client.fetch(query).then((data) => {
			setExperiences(data);
		});

		client.fetch(skillsQuery).then((data) => {
			setSkills(data);
		});
	}, []);

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
					<div className='tag-cmp app__flex'>
						<p className='p-text'>With a Wide</p>
						<p className='p-text'>Set of Skills</p>
					</div>
				</div>
				
			</motion.div>
			
			<div className="app__skills-container">
				<motion.div className="app__skills-list">
				{
					skills.map((skill, index) => (
						<motion.div whileInView={{ opacity: [0, 1] }}
									transition={{ duration: 0.5 }}
									className="app__skills-item app__flex"
									key={`skill-${skill.name}-${index}`} >
							<div className="app__flex"
								style={{ backgroundColor: skill.bgColor }} >
								<img src={urlFor(skill.icon)} alt={skill.name} />
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))
				}
				</motion.div>
				<div className="app__skills-exp">
				{
					experiences.map((experience, index) => (
						<motion.div className="app__skills-exp-item"
									key={`experience-${experience.year}-${index}`} >
							<div className="app__skills-exp-year">
								<p className="bold-text">{experience.year}</p>
							</div>
							<motion.div className="app__skills-exp-works">
							{
								experience.works.map((work, index) => (
									<div key={`work-${work.name}-${work.company}-${index}`}>
										<motion.div whileInView={{ opacity: [0, 1] }}
													transition={{ duration: 0.5 }}
													className="app__skills-exp-work"
													data-tip
													data-for={work.name}
													id={`${work.name}-${work.company}`} >
											<h4 className="bold-text">{work.name}</h4>
											<p className="p-text">{work.company}</p>
										</motion.div>

										<Tooltip anchorId={`${work.name}-${work.company}`} 
												content={work.desc} 
												place="top"
												className="skills-tooltip" />
									</div>
								))
							}
							</motion.div>
						</motion.div>
					))
				}
				</div>
			</div>
		</div>
	)
}

export default AppWrap(Heroe, 'home');