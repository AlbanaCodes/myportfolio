import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './ContactMe.scss';

const ContactMe = () => {
	const [formData, setFormData] = useState({ username: '', email: '', message: '' });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [formValid, setFormValid] = useState(false);

	const { username, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;		

		let userInput = { ...formData, [name]: value };
		setFormData(userInput);

		let emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
		if(userInput.username.trim().length > 0 && 
			userInput.email.trim().length > 0 && 
				userInput.message.trim().length > 0 && 
				emailRegex.test(userInput.email)){							
			setFormValid(true);
		} else {
			setFormValid(false);
		}
	};

	const handleSubmit = () => {
    	setLoading(true);
		const contact = {
			_type: 'contact',
			name: formData.username,
			email: formData.email,
			message: formData.message,
		};

		client.create(contact)
		.then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		})
		.catch((err) => console.log(err));
	};

	return (
		<>
		<h2 className="head-text">Curious enough? Send me a message!</h2>
		{
			!isFormSubmitted ? (
				<div className="app__contactme-form app__flex">
					<div className="app__flex">
						<input tabIndex="1" className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
					</div>
					<div className="app__flex">
						<input tabIndex="2" className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
					</div>
					<div>
						<textarea className="p-text"
								placeholder="Your Message"
								value={message}
								name="message"
								onChange={handleChangeInput} 
								tabIndex="3" />
					</div>
					<button type="button" className="p-text" disabled={!formValid} onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">
						Thank you for getting in touch with me!
					</h3>
				</div>
			)
		}
		</>
	);
};

export default AppWrap(
  MotionWrap(ContactMe, 'app__contactme'),
  'contact'
);
