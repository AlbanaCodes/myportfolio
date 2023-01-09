import React from 'react';

const NavigationDots = ({ active }) => {
  return (
	<div className="app__navigation">		
	{ 
		['home', 'work', 'skills', 'contact'].map((item, index) => (
			<a href={`#${item}`} 
			   onClick={() => setToggle(false)}
			   key={item + index}
			   className='app__navigation-dot'
			   style={ active === item ? {backgroundColor: '#313BAC'} : {} } />				
		))
	}
	</div>
  )
}

export default NavigationDots;