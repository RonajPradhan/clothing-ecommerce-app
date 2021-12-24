import React, { useState } from 'react';
import {
	auth,
	createUserProfileDocument,
} from '../../FirebaseUtils/firebaseutils';
import CustomButton from '../custom-button/custom.button.component';
import FormInput from '../form-input/form.input.component.';
import './sign-up.styles.scss';

const SignUp = () => {
	const [credentials, setCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [error, setError] = useState<any>();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = credentials;
		console.log(credentials);
		if (password !== confirmPassword) {
			alert('Passwords dont match');
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });

			setCredentials({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.log(error);
			setError(error);
		}
	};

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};
	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
				<FormInput
					type="text"
					name="displayName"
					value={credentials.displayName}
					label="Display Name"
					onChange={(e: any) => handleChange(e)}
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={credentials.email}
					label="Email"
					onChange={(e: any) => handleChange(e)}
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={credentials.password}
					label="Password"
					onChange={(e: any) => handleChange(e)}
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={credentials.confirmPassword}
					label="Confirm Password"
					onChange={(e: any) => handleChange(e)}
					required
				/>
				{error && <p className="error-message">*Note: ({error.message})</p>}
				<CustomButton type="submit">SIGN Up</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
