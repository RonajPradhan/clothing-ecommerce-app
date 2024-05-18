import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form.input.component.';
import CustomButton from '../custom-button/custom.button.component';
import { auth, signInWithGoogle } from '../../FirebaseUtils/firebaseutils';

const SignIn = () => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const { email, password } = credentials;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setCredentials({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password.</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={credentials.email}
					label="email"
					onChange={(e: any) => handleChange(e)}
					required
				/>

				<FormInput
					name="password"
					type="password"
					label="password"
					value={credentials.password}
					onChange={(e: any) => handleChange(e)}
					required
				/>

				<div className="buttons">
					<CustomButton type="submit">Signin</CustomButton>
				</div>
			</form>
			<CustomButton onClick={signInWithGoogle} isGoogleSignedIn>
				Signin with google
			</CustomButton>
		</div>
	);
};

export default SignIn;
