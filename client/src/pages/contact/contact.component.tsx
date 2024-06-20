import React, { useState } from 'react';
import './contact.styles.scss';
import Backdrop from '../../assets/justanimage.jpg';
import FormInput from '../../components/form-input/form.input.component.';
import FormTextArea from '../../components/form-textarea/form.textarea.component';
import CustomButton from '../../components/custom-button/custom.button.component';
import axios from 'axios';
import { showToast } from '../../utils/showToast';

const Contact = () => {
	const [info, setInfo] = useState<any>({ name: '', email: '', message: '' });

	const handleChange = (e: any) => {
		e.preventDefault();
		setInfo({ ...info, [e.target.name]: e.target.value });
	};

	const handleButton = async (e: any) => {
		// Side Effect Here!
		e.preventDefault();
		const { name, email, message } = info;
		const data = {
			name: name,
			email: email,
			message: message,
		};

		try {
			const res = await axios.post('/sendEmail', data);
			if (res.status === 200) {
				showToast('Email sent successfully!', 'success');
				setInfo({ name: '', email: '', message: '' });
			} else {
				showToast(`Error sending email status code ${res.status}`, 'error');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="image-container">
				<h3>Contact Us</h3>
				<img className="image-backdrop" src={Backdrop} alt="" />
			</div>
			<div className="second-line">
				<div className="headline">
					<h3>Let's Start a Conversation</h3>
				</div>
				<div className="grid-container">
					<div className="left-grid">
						<div className="box-grid">
							<h4 className="left-title">Ask how we can help you:</h4>
							<div className="content-one">
								<h4>See our platform in action</h4>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Cupiditate quibusdam asperiores fuga doloremque deserunt nulla
									quia amet odit cum voluptas!
								</p>
							</div>
							<div className="content-one">
								<h4>See our platform in action</h4>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Cupiditate quibusdam asperiores fuga doloremque deserunt nulla
									quia amet odit cum voluptas!
								</p>
							</div>
						</div>

						<div className="content-one"></div>
					</div>
					<div className="right-grid">
						<div className="right-heading">
							<h4>Want to reach out?</h4>
						</div>
						<form onSubmit={(e) => handleButton(e)}>
							<FormInput
								name="name"
								type="name"
								value={info.name}
								label="name"
								onChange={(e: any) => handleChange(e)}
								required
							/>
							<FormInput
								name="email"
								type="email"
								value={info.email}
								label="email"
								onChange={(e: any) => handleChange(e)}
								required
							/>
							<FormTextArea
								label="message"
								name="message"
								value={info.message}
								onChange={(e: any) => handleChange(e)}
								required
							/>
							<CustomButton type="submit">Submit</CustomButton>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
