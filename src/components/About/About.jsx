import React, {useState, useEffect} from "react";
import { motion } from 'framer-motion';
import { images } from  '../../constants';
import './About.scss';

const abouts = [
  {title: 'Web Development', description: 'I am a good web developer.' },
  {title: 'Front-end', description: 'I am a good web developer.' },
  {title: 'Web Design', description: 'I am a good web developer.' }
];

const About = () => {
  return(
  <>
    <h2 className="head-text"> <span> Coding </span> Is Like Cooking. You Follow the <span> Instructions </span> And Add Your Own Stuff!</h2>

    <div className="app__profiles">
    {
      abouts.map((about, index) => (
        <motion.div whileInView={{opacity: 1}}
              whileHover={{scale: 1.1}}
              transition={{duration: 0.5, type: 'tween'}}
              className="app__profile-item"
               key={about.title + index}>
          <h2 className="bold-text" style={{ marginTop: 20}}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
      ))
      }
    </div>
  </>
  )
}

export default About;